import React, { useCallback, useEffect, useState } from 'react';
import RadioButtonCustom from 'src/components/customInput/RadioButtonCustom';
import { useFormik } from 'formik';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';

const CardQuestion = ({
  questionTitle,
  options,
  onChange,
  values,
  optionType,
}) => {
  return (
    <div className="mb-4">
      <div className="text-base font-medium">{questionTitle}</div>
      <div
        className={` flex ${
          optionType === 'level-button' ? 'my-5 w-[70%]' : 'mt-3 w-[250px]'
        } justify-between`}
      >
        {options?.map((op) => {
          return (
            <div key={op} className="radio-toolbar flex items-center gap-2">
              <RadioButtonCustom
                value={op}
                checked={values === op}
                onChange={(e) => onChange(e)}
                id={`${questionTitle}${op}`}
                type={optionType === 'level-button' ? 'level-button' : 'basic'}
                label={op}
              />
              {optionType !== 'level-button' && (
                <span className="text-base">{op}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FormSurveyChse = ({
  listOfQuestion,
  dtwControlId,
  totalPage,
  pageActive,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [questionAnswer, setQuestionAnswer] = useState({});
  const [loading, setLoading] = useState(false);
  const formSurveiChse = useFormik({
    initialValues: questionAnswer,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const dataToPost = [];
        Object.keys(values).forEach((key) => {
          if (values[key] !== '') {
            dataToPost.push({
              dtwChseSurveyQuestionId: key,
              answer: values[key],
            });
          }
        });
        setLoading(true);
        const res = await axiosInstance.post('/dtw-control/v1/chse-survey', {
          dtwControlId: dtwControlId,
          dtwChseSurveyAnswers: dataToPost,
          status: 1,
        });
        if (res.data.success) {
          enqueueSnackbar(res.data.message, {
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            content: (key, message) => (
              <CustomComponent
                id={key}
                message={message}
                variant="success"
                title="Submit Berhasil"
              />
            ),
          });
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar(error.message, {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          content: (key, message) => (
            <CustomComponent
              id={key}
              message={message}
              variant="error"
              title="Submit Gagal!"
            />
          ),
        });
      }
    },
  });

  const { values, setFieldValue, handleSubmit } = formSurveiChse;

  const handleChangeQuestion = () => {
    const resObj = {};
    listOfQuestion?.dtwChseSurveyQuestions?.forEach((data) => {
      resObj = {
        ...resObj,
        [data.dtwChseSurveyQuestionId]:
          data.dtwChseSurveyAnswers?.length > 0
            ? data.dtwChseSurveyAnswers[0].answer
            : '',
      };
    });
    setQuestionAnswer(resObj);
  };

  useEffect(() => {
    handleChangeQuestion();
  }, [listOfQuestion]);

  return (
    <div className="pb-14">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[#3267E3]">{listOfQuestion?.area}</div>
        <div className="text-[#3267E3]">
          {pageActive}/{totalPage}
        </div>
      </div>
      {listOfQuestion?.dtwChseSurveyQuestions?.map((question) => {
        return (
          <CardQuestion
            key={question.question}
            questionTitle={question.question}
            options={question.options}
            onChange={(e) =>
              setFieldValue(question.dtwChseSurveyQuestionId, e.target.value)
            }
            values={values[question.dtwChseSurveyQuestionId]}
            optionType={question.optionType}
          />
        );
      })}
      <div className="mt-10 w-full">
        <button
          onClick={handleSubmit}
          className="w-full rounded-md bg-primary-green p-3 text-white transition-all hover:bg-[#169c8b]"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <ReactLoading
                type="spin"
                color="#fff"
                height="25px"
                width="25px"
              />
            </div>
          ) : (
            'Simpan & Lanjutkan'
          )}
        </button>
      </div>
    </div>
  );
};

export default FormSurveyChse;
