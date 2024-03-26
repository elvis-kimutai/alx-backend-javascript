export default function getStudentIdsSum(listOfStudents) {
  const result = listOfStudents.reduce((preVal, cur) => preVal + cur.id, 0);
  return result;
}
