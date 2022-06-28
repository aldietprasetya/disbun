import axiosInstance from 'src/lib/axios';

export const getDataQuestion = async ({ dtwControlId }) => {
  try {
    const result = await axiosInstance.get(
      `/dtw-control/v1/chse-survey/${dtwControlId}`,
    );
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};
