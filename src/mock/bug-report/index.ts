import logo from '@assets/icons/x.svg';
import { BugReport } from '@/types/bug-report';

const mockBugReport: BugReport = {
  id: 1,
  latitude: 37.7749,
  longitude: -122.4194,
  user_id: 101,
  bug_image_url: logo,
  bug_type: '개미',
  bug_size: '작음',
  equipment: '살충제',
  price: 5000,
  note: '화장실에서 나왔어요.',
  title: '화장실에서 개미가 나왔어요.',
};

export default mockBugReport;
