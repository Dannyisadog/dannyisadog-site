import { fetchData } from "../utility/api"

export const fetchAssignmentList = () =>
  fetchData({
    url: "/course/assignmentList",
  });

export const fetchAssignmentContent = (id) =>
  fetchData({
    url: `/course/assignment/${id}`,
  });

export const submitAssignment = (data) => {
  fetchData({
    method: 'POST',
    url: '/course/submitAssignment',
    data
  });
}

export const updateAssignment = (data) => {
  fetchData({
    method: 'PUT',
    url: '/course/updateAssignment',
    data
  });
}