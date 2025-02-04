const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/my-info`,
  submitPersonalInfo: `${prefix}/user/info`,

  submitHunterInfo: `${prefix}/user/info/new`,
  getHunterInfo: `${prefix}/alarm/hunter-info`,
  alarmRequest: `${prefix}/alarm/request`,
  updateMatchStatus: `${prefix}/matches`,

  bugReports: {
    create: `${prefix}/bug-reports`,
    uploadImage: `${prefix}/bug-reports/image`,
  },

  huntingPrice: `${prefix}/hunting`,

  endHunting: `${prefix}/hunting`,
  review: `${prefix}/review`,
  fcmToken: `${prefix}/alarm/fcm-token`,
};

export default endpoints;
