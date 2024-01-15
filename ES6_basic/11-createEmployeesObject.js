export default function createEmployeesObject(departmentName, employees) {
  const list = [];
  for (const employee of employees) {
    list.push(employee);
  }
  const obj = {
    [departmentName]: list,
  };
  return obj;
}
