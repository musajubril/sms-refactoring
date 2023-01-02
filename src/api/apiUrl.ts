const API_URL = "https://sms-vv4i.onrender.com/api/v1";
// const API_URL = "https://scoolz.herokuapp.com/api/v1";
const LOGGED_IN = (schoolId: any) => `${API_URL}/schools/${schoolId}`;
export const VERIFY_OTP = (schoolId: any) =>
  `${API_URL}/schools/${schoolId}/otp`;
export const CHANGE_PASSWORD = (schoolId: any, uid: any) =>
  `${API_URL}/schools/${schoolId}/user-activate/${uid}`;
export const LOGIN_URL = (schoolId: any) =>
  `${API_URL}/schools/${schoolId}/token`;
export const REGISTER_URL = `${API_URL}/register`;
export const STUDENTS = (schoolId: any, off: any) =>
  `${LOGGED_IN(schoolId)}/students?limit=10&offset=${off}`;
export const RESULTPIN = (schoolId: any, classId: any) =>
  `${LOGGED_IN(schoolId)}/students/${classId}/result-pin`;
export const PARENTRESULTPIN = (schoolId: any) =>
  `${LOGGED_IN(schoolId)}/parent-result-pin`;
export const STUDENTSCOUNT = (schoolId: any) =>
  `${LOGGED_IN(schoolId)}/metadata`;
export const SENDMESSAGE = (schoolId: any) =>
  `${LOGGED_IN(schoolId)}/send-message`;
export const BIRTHDAYS = (schoolId: any) => `${LOGGED_IN(schoolId)}/birthdays`;
export const TEACHERBIRTHDAYS = (schoolId: any) =>
  `${LOGGED_IN(schoolId)}/birthdays?role=Teacher`;
export const STUDENT = (schoolId: any, studentId: any) =>
  `${LOGGED_IN(schoolId)}/students/${studentId}`;
export const STUDENTPAYMENT = (schoolId: any, studentId: any) =>
  `${STUDENT(schoolId, studentId)}/payments`;
export const TEACHERS = (schoolId: any, off: any, limit: any) =>
  `${LOGGED_IN(schoolId)}/staffs?limit=10&offset=${off}`;
export const TEACHER = (schoolId: any, teacherId: any) =>
  `${LOGGED_IN(schoolId)}/staffs/${teacherId}`;

export const TEACHERCOURSES = (schoolId: any, teacherId: any) =>
  `${LOGGED_IN(schoolId)}/staffs/${teacherId}/courses`;

export const STUDENTCOURSES = (schoolId: any, studentId: any) =>
  `${LOGGED_IN(schoolId)}/students/${studentId}/courses`;
export const HOMEROOMS = (schoolId: any) => `${LOGGED_IN(schoolId)}/classes`;
export const HOMEROOM = (schoolId: any, classId: any) =>
  `${HOMEROOMS(schoolId)}/${classId}`;
export const HOMEROOMCOURSES = (schoolId: any, classId: any) =>
  `${HOMEROOMS(schoolId)}/${classId}/courses`;
export const PAYMENTS = (schoolId: any) => `${LOGGED_IN(schoolId)}/payments`;
export const GETPAYMENTS = (schoolId: any, off: any) =>
  `${LOGGED_IN(schoolId)}/payments?limit=10&offset=${off}`;
export const PAYMENT = (schoolId: any, paymentId: any) =>
  `${PAYMENTS(schoolId)}/${paymentId}`;
export const GET_COURSES = (schoolId: any) => `${LOGGED_IN(schoolId)}/courses`;
export const COURSE = (schoolId: any, courseId: any) =>
  `${GET_COURSES(schoolId)}/${courseId}`;
export const CLASSSTUDENTS = (schoolId: any, classId: any) =>
  `${HOMEROOM(schoolId, classId)}/students`;
export const BURSARCLASSSTUDENTS = (schoolId: any, classId: any) =>
  `${HOMEROOM(schoolId, classId)}/bursar-students`;
export const COURSESTUDENTS = (schoolId: any, id: any) =>
  `${GET_COURSES(schoolId)}/${id}/students`;
export const GRADE = (schoolId: any, id: any) =>
  `${STUDENT(schoolId, id)}/grade`;
export const RESULTS = (schoolId: any, id: any) =>
  `${STUDENT(schoolId, id)}/result`;
export const VIEW_RESULT = (slug: any, id: any) =>
  `${API_URL}/schools/${slug}/students/${id}/result-slug`;

export const GETSCHOOL = (slug: any) => `${API_URL}/schools/${slug}`;
export const SENDRESULTS = (schoolId: any, classId: any) =>
  `${API_URL}/schools/${schoolId}/classes/${classId}/send-result`;
export const ADDBILL = (schoolId: any, classId: any) =>
  `${API_URL}/schools/${schoolId}/classes/${classId}/bills`;
export const GETBILL = (schoolId: any) =>
  `${API_URL}/schools/${schoolId}/bills`;
export const GETSTUDENTBILL = (schoolId: any, studentId: any) =>
  `${API_URL}/schools/${schoolId}/students/${studentId}/bills`;
export const STUDENTBASIC = (schoolId: any) =>
  `${API_URL}/schools/${schoolId}/students-basic`;
export const ADDOUTSTANDING = (schoolId: any, studentId: any) =>
  `${API_URL}/schools/${schoolId}/custom-fee`;
export const ADDDISCOUNT = (schoolId: any, studentId: any) =>
  `${API_URL}/schools/${schoolId}/custom-fee`;
export const GETOUTSTANDING = (schoolId: any) =>
  `${API_URL}/schools/${schoolId}/debt`;
export const GETDISCOUNT = (schoolId: any) =>
  `${API_URL}/schools/${schoolId}/school_fee`;
