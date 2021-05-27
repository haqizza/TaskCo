import axios from 'axios';

const API_URL = 'http://127.0.0.1:4000/';

class ClassService{
  async getClass(class_id){
    const res = await axios.get(API_URL + 'class?class_id=' + class_id);
    return res.data[0];
  }

  saveCurrentClass(clas){
    localStorage.setItem("class", JSON.stringify(clas));
  }

  async createClass(){
    const res = await axios.post(API_URL + 'class');
    return res.data;
  }
  
  updateClass(clas, class_name){
    clas.class_name = class_name;
    axios.put(API_URL + 'class' + clas.class_id, clas);
  }
  
  getCurrentClass(){
    return JSON.parse(localStorage.getItem("class"));
  }

  async getClassLessons(class_id){
    // const res = await axios.get(API_URL + 'lesson/' + class_id);
    const res = await axios.get(API_URL + 'lesson');
    return res.data;
  }

  async getLesson(class_id, lesson_id){
    // const res = await axios.get(API_URL + 'lesson/' + class_id);
    const res = await axios.get(API_URL + 'lesson?lesson_id=' + lesson_id);
    return res.data[0];
  }
  
  async getMaterialsFromLecturer(class_id, lesson_id){
    const res = await axios.get(API_URL + 'material?type=lecturer');
    return res.data;
  }

  async getMaterialsFromUser(class_id, lesson_id){
    const res = await axios.get(API_URL + 'material?type=user');
    return res.data;
  }

  async getMaterial(class_id, material_id){
    const res = await axios.get(API_URL + 'material?material_id=' + material_id);
    return res.data[0];
  }

  createMaterial(){
    const res = axios.push(API_URL + 'material');
    return res.data;
  }
  
  async getClassMember(class_id){
    // const res = await axios.get(API_URL + 'class/' + class_id + '/member');
    const res = await axios.get(API_URL + 'material?type=user');
    return res.data;
  }

  deleteMember(class_id, student_id){
    // axios.delete(API_URL + 'class/' + class_id + '/member/' + student_id);
    axios.delete(API_URL + 'classMember/' + student_id);
  }
  
  async getClassMemberReq(class_id){
    // const res = await axios.get(API_URL + 'class/member_req/' + class_id);
    const res = await axios.get(API_URL + 'classMemberReq');
    return res.data;
  }
  
  approveMember(class_id, student_id){
    axios.put(API_URL + 'class/member_req/'+ class_id, {
      student_id : student_id,
      action: "approve"
    });
  }
  
  declineMember(class_id, student_id){
    axios.put(API_URL + 'class/member_req/'+ class_id, {
      student_id : student_id,
      action: "decline"
    });
  }
  
  addSchedule(clas, schedule){
    clas.class_schedule = schedule;
    axios.put(API_URL + 'class?class_id=' + clas.class_id , clas);
  }

  async getTasks(){
    const res = await axios.get(API_URL + 'task');
    return res.data;
  }

  async getTask(task_id){
    const res = await axios.get(API_URL + 'task?task_id=' + task_id);
    return res.data[0];
  }

  addTask(task_id){
    const res = axios.post(API_URL + 'task' + task_id);
    return res.data;
  }

  deleteTask(task_id){
    const res = axios.delete(API_URL + 'task' + task_id);
    return res.data;
  }
  
  async getDeadlines(){
    const res = await axios.get(API_URL + 'deadline');
    return res.data;
  }
  
  async getDeadline(cl_assignment_id){
    const res = await axios.get(API_URL + 'deadline?cl_assignment_id=' + cl_assignment_id);
    return res.data[0];
  }

  updateDeadline(deadline){
    
  }

  deleteDeadline(deadline){

  }
}

export default new ClassService();