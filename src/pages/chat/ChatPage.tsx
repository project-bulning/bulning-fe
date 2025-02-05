import { useEffect, useState } from 'react';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { css, useTheme } from '@emotion/react';
import HuntEndBottomSheet from '@features/afterHunting/HuntEndBottomSheet';
import CancelMatchingBottomSheet from '@features/hunterMatching/CancelMatchingBottomSheet';
import { tokenStorage } from '@/utils/tokenStorage';
import arrowBack from '@/assets/icons/arrow-back.svg';
import sendBtn from '@/assets/icons/send.svg';

interface WriteChatRequest {
  message_type: 'write';
  content: string;
}

function ChatPage() {
  const theme = useTheme();
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<{ type: 'received' | 'sent'; content: string; created_at: Date; status: string; }[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [isCancelBottomSheetOpen, setIsCancelBottomSheetOpen] = useState<boolean>(false);
  const [resizeHeight, setResizeHeight] = useState<number>(0);

  useEffect(() => {
    const resizeHandler = (event: Event) => {
      const height = (event.currentTarget as VisualViewport)?.height;
      setResizeHeight(window.innerHeight - (height !== undefined ? height : 0));
    };

    const { visualViewport } = window;
    visualViewport?.addEventListener('resize', resizeHandler);

    return () => visualViewport?.removeEventListener('resize', resizeHandler);
  }, []);
  useEffect(() => {
    const accessToken = tokenStorage.get();
    if (!accessToken) {
      console.error('Access token not found');
      return;
    }

    const ws = new WebSocket(`wss://buln.ing/?token=${encodeURIComponent(accessToken)}`);

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('onmessage', data);
        if (Array.isArray(data)) {
          setMessages((prev) => [
            ...prev,
            ...data.map((chat) => ({
              type: 'received' as 'received',
              content: `${chat.content}`,
              created_at: new Date(chat.created_at),
              status: chat.status as string,
            })),
          ]);
        } else if (data?.message_type === 'write' && data?.content) {
          console.log('새 메시지 처리: ', data);
          setMessages((prev) => [...prev, {
            type: 'received',
            content: data.content,
            created_at: data.created_at,
            status: data.status,
          }]);
          sendReadRequest();
        } else {
          setMessages((prev) => [
            ...prev,
            {
              type: 'received',
              content: data.content,
              created_at: new Date(data.created_at),
              status: data.status,
            },
          ]);
          sendReadRequest();
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    ws.onclose = (event) => {
      console.log('WebSocket connection closed', event);
      setSocket(null);
    };

    ws.onerror = (event) => {
      console.error('WebSocket error:', event);
    };

    setSocket(ws);

    const sendReadRequest = () => {
      if (ws.readyState === WebSocket.OPEN) {
        const readRequest = { message_type: 'read' };
        console.log('sendReadRequest: ', readRequest);
        ws.send(JSON.stringify(readRequest));
      }
    };

    // eslint-disable-next-line consistent-return
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        console.log('이거 맞음');
        ws.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket?.readyState === WebSocket.OPEN && messageInput.trim()) {
      const message: WriteChatRequest = {
        message_type: 'write',
        content: messageInput.trim(),
      };

      console.log('sendMessage: ', message);
      socket.send(JSON.stringify(message));

      setMessages((prev) => [
        ...prev,
        {
          type: 'sent', content: message.content, created_at: new Date(), status: 'SENT',
        },
      ]);
      setMessageInput('');
    }
  };

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const handleCancelBottomSheet = () => {
    setIsCancelBottomSheetOpen(true);
  };

  const handleCloseCancelBottomSheet = () => {
    setIsCancelBottomSheetOpen(false);
  };

  return (
    <>
      <DefaultPaddedContainer>
        <Container direction="column" height="100vh" justify="space-between">
          <Container direction="column">
            <Container
              justify="space-between"
              align="center"
              height="55px"
              css={{
                backgroundColor: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 10,
              }}
            >
              <Container align="center" gap="5px">
                <img src={arrowBack} alt="arrow-back" />
                <Heading.H3_5 weight="medium">헌터와의 채팅</Heading.H3_5>
              </Container>
              <button type="button" css={btnStyle} onClick={handleOpenBottomSheet}>사냥 종료하기</button>
            </Container>
            <div
              css={{
                position: 'relative',
                left: 'calc(-50vw + 50%)',
                width: '100vw',
                height: '0.5px',
                backgroundColor: 'rgba(116, 115, 115, 0.40)',
                marginBottom: '15px',
              }}
            />
            <Container
              direction="column"
              justify="center"
              align="center"
              gap="5px"
              padding="13px 30px"
              css={{
                backgroundColor: theme.colors.primary.main, color: 'white', borderRadius: '8px', marginBottom: '26px',
              }}
            >
              <Paragraph variant="xsmall">헬피는 자세한 주소와 공동현관 비밀번호 등을 알려줘야 해요.</Paragraph>
              <Paragraph onClick={handleCancelBottomSheet} css={{ fontSize: '10px', textDecoration: 'underline' }}>*거래를 취소하고 싶나요?</Paragraph>
            </Container>
            <Container width="100%" direction="column" height={`calc(70% - ${resizeHeight}px)`} css={{ marginBottom: '60px', overflowY: 'auto' }}>
              {/* eslint-disable react/no-array-index-key */}
              {messages.map((msg, index) => (
                <Container
                  gap="3px"
                  key={index}
                  css={msg.type === 'sent' ? sentWrapperStyle : receivedWrapperStyle}
                >
                  {msg.type === 'sent' ? (
                    <>
                      <span css={timeStyle}>
                        {/* {msg.status === 'UNREAD' && '1 '} */}
                        {new Date(msg.created_at).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      <Container css={receivedMessageStyle}>{msg.content}</Container>
                    </>
                  ) : (
                    <>
                      <Container css={sentMessageStyle}>{msg.content}</Container>
                      <span css={timeStyle}>
                        {new Date(msg.created_at).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                        {/* {msg.status === 'UNREAD' && ' 1'} */}
                      </span>
                    </>

                  )}
                </Container>
              ))}
            </Container>
          </Container>
          <Container
            height="50px"
            padding="10px 20px"
            justify="space-between"
            align="center"
            gap="13px"
            css={{
              position: 'fixed',
              bottom: `${resizeHeight}px`,
              left: 0,
              zIndex: 10,
              width: '100%',
            }}
          >
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              css={inputStyle}
              placeholder="메시지를 입력하세요..."
            />
            <img
              src={sendBtn}
              alt="send"
              role="presentation"
              onClick={sendMessage}
              css={{
                width: '37px',
                height: '37px',
              }}
            />
          </Container>
        </Container>
      </DefaultPaddedContainer>
      <HuntEndBottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet} />
      <CancelMatchingBottomSheet
        isOpen={isCancelBottomSheetOpen}
        onClose={handleCloseCancelBottomSheet}
      />
    </>
  );
}

const btnStyle = css`
    font-size: 12px;
    color: white;
    background-color: #C72323;
    padding: 6px;
    border-radius: 3px;
    border: none;
    width: 100px;
`;

const inputStyle = css`
    width: 100%;
    height: 37px;
    box-sizing: border-box;
    padding: 8px 12px;
    font-size: 16px;
    color: #757575;
    background-color: #E7EDF6;
    border: none;
    border-radius: 10px;
`;

const timeStyle = css`
  font-size: 12px;
  color: #888;
  margin-left: 8px;
  align-self: flex-end;
  white-space: nowrap;
`;

const sentWrapperStyle = css`
    width: fit-content;
    align-self: flex-end;
    max-width: 95%;
`;

const receivedWrapperStyle = css`
    width: fit-content;
    max-width: 95%;
`;

const receivedMessageStyle = css`
    background-color: #012962;
    color: white;
    padding: 8px 15px;
    border-radius: 8px;
    width: fit-content;
    align-self: flex-end;
    margin: 5px 0;
`;

const sentMessageStyle = css`
    background-color: #E7EDF6;
    color: #000;
    padding: 8px 15px;
    border-radius: 8px;
    width: fit-content;
    align-self: flex-start;
    margin: 5px 0;
`;

export default ChatPage;
