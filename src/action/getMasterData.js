import axiosInstance from 'src/lib/axios';

export const getProvince = async () => {
  try {
    const result = await axiosInstance.get('/master-data/v1/provinces');
    return result.data.data.provinces;
  } catch (error) {
    console.log(error);
  }
};

export const getCities = async ({ provinceId }) => {
  try {
    const result = await axiosInstance.get(
      `/master-data/v1/cities/${provinceId}`,
    );
    return result.data.data.cities;
  } catch (error) {
    console.log(error);
  }
};
export const getDistricts = async ({ cityId }) => {
  try {
    const result = await axiosInstance.get(
      `/master-data/v1/districts/${cityId}`,
    );
    return result.data.data.districts;
  } catch (error) {
    console.log(error);
  }
};

export const getVillages = async ({ districId }) => {
  try {
    const result = await axiosInstance.get(
      `/master-data/v1/villages/${districId}`,
    );
    return result.data.data.villages;
  } catch (error) {
    console.log(error);
  }
};

export const getDtwTypes = async () => {
  try {
    const result = await axiosInstance.get('/master-data/v1/dtw-types');
    return result.data.data.types;
  } catch (error) {
    console.log(error);
  }
};

export const getDtwCategories = async () => {
  try {
    const result = await axiosInstance.get('/master-data/v1/dtw-categories');
    return result.data.data.categories;
  } catch (error) {
    console.log(error);
  }
};

export const getDtwActivity = async () => {
  try {
    const result = await axiosInstance.get('/master-data/v1/dtw-activities');
    return result.data.data.activities;
  } catch (error) {
    console.log(error);
  }
};

export const getDtwLocationCategories = async () => {
  try {
    const result = await axiosInstance.get(
      '/master-data/v1/dtw-location-categories',
    );
    return result.data.data.locationCategories;
  } catch (error) {
    console.log(error);
  }
};

export const getDtwVilageStatus = async () => {
  try {
    const result = await axiosInstance.get(
      '/master-data/v1/dtw-village-statuses',
    );
    return result.data.data.villageStatuses;
  } catch (error) {
    console.log(error);
  }
};

export const getDtwAttractionLevels = async () => {
  try {
    const result = await axiosInstance.get(
      '/master-data/v1/dtw-attraction-levels',
    );
    return result.data.data.attractionLevels;
  } catch (error) {
    console.log(error);
  }
};

export const getDtwAttractionTypes = async () => {
  try {
    const result = await axiosInstance.get(
      '/master-data/v1/dtw-attraction-types',
    );
    return result.data.data.attractionTypes;
  } catch (error) {
    console.log(error);
  }
};

export const getAllNib = async () => {
  try {
    const result = await axiosInstance.get('/dtw/v1/all-nib');
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getChseSurveyTypes = async () => {
  try {
    const result = await axiosInstance.get(
      '/master-data/v1/dtw-chse-survey-types',
    );
    return result.data.data.dtwChseSurveyTypes;
  } catch (error) {
    console.log(error);
  }
};

export const getHealthProtocolFacilities = async () => {
  try {
    const result = await axiosInstance.get(
      '/master-data/v1/health-protocol-facilities',
    );
    return result.data.data.healtProtocolFacilities;
  } catch (error) {
    console.log(error);
  }
};
