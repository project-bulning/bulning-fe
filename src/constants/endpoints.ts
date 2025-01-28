const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/my-info`,

  bugReports: {
    create: `${prefix}/bug-reports`,
    uploadImage: `${prefix}/bug-reports/image`,
  },

  fcmToken: `${prefix}/alarm/fcm-token`,
};

export default endpoints;
