const prefix = '/api';

const endpoints = {
  myInfo: `${prefix}/my-info`,
  bugReports: `${prefix}/bug-reports`,
  submitPersonalInfo: `${prefix}/user/info`,
  bugReports: {
    create: `${prefix}/bug-reports`,
    uploadImage: `${prefix}/bug-reports/image`,
  },
};

export default endpoints;
