const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/my-info`,
  submitPersonalInfo: `${prefix}/user/info`,

  submitHunterInfo: `${prefix}/user/info/new`,
  alarmRequest: `${prefix}/alarm/request`,

  bugReports: {
    create: `${prefix}/bug-reports`,
    uploadImage: `${prefix}/bug-reports/image`,
  },

  fcmToken: `${prefix}/alarm/fcm-token`,
};

export default endpoints;
