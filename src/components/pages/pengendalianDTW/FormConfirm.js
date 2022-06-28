import React, { useCallback, useEffect, useState } from 'react';
import RadioButtonCustom from 'src/components/customInput/RadioButtonCustom';
import { useFormik } from 'formik';
import axiosInstance from 'src/lib/axios';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import ReactLoading from 'react-loading';
import { useRouter } from 'next/router';

const FormConfirmChse = ({ listOfQuestion, dtwControlId }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [questionAnswer, setQuestionAnswer] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(1);
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
          status: isSubmit,
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
                title={isSubmit === 1 ? `Draft Disimpan` : 'Berhasil Disimpan!'}
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

  const { handleSubmit } = formSurveiChse;

  const handleChangeQuestion = () => {
    const resObj = {};
    listOfQuestion?.forEach((data) => {
      data.dtwChseSurveyQuestions.forEach((item) => {
        resObj = {
          ...resObj,
          [item.dtwChseSurveyQuestionId]:
            item.dtwChseSurveyAnswers?.length > 0
              ? item.dtwChseSurveyAnswers[0].answer
              : '',
        };
      });
    });
    setQuestionAnswer(resObj);
  };

  useEffect(() => {
    handleChangeQuestion();
  }, [listOfQuestion]);

  const handleConfirm = () => {
    setIsSubmit(2);
    handleSubmit();
    router.push('/pengendalian-dtw');
  };

  return (
    <div className="pb-14">
      <div className="mb-2 ">
        <div className="text-[#3267E3]">Konfirmasi</div>
      </div>
      <div className="mb-4 font-light">
        Dengan mengisi formulir di atas, Anda mengakui kebenaran data identitas
        dan informasi daya tarik wisata terkait untuk keperluan survey destinasi
        pariwisata.
      </div>
      <div className="mb-4 font-light">
        Apabila Anda belum yakin untuk melakukan pengiriman formulir sila pilih
        opsi Simpan di Draft, jika sebaliknya sila pilih opsi Ajukan. Anda dapat
        melihat status pengajuan Survei CHSE melalui Menu Riwayat Anda.
      </div>
      <div className="mb-4 font-light">Terima kasih.</div>

      <div className="mt-10 flex w-full items-center justify-end gap-4">
        <div className="flex w-[50%] items-center gap-4">
          <button
            onClick={handleSubmit}
            className="w-full rounded-md border border-primary-green p-3 text-xs text-primary-green transition-all"
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
              'Simpan di Draft'
            )}
          </button>
          <button
            onClick={handleConfirm}
            className="w-full rounded-md bg-primary-green p-3 text-xs text-white transition-all hover:bg-[#169c8b]"
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
              'Ajukan'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormConfirmChse;
