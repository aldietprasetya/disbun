import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import FormSurveyChse from 'src/components/pages/pengendalianDTW/FormSurveyChse';
import { useRouter } from 'next/router';
import FormConfirmChse from 'src/components/pages/pengendalianDTW/FormConfirm';
import { getDataQuestion } from 'src/action/pengendalianDtwPage';

export async function getServerSideProps(context) {
  const dtwControlId = context.params.dtwControlId;

  return { props: { dtwControlId } };
}

const SurveiChseBySlugPage = ({ dtwControlId }) => {
  const router = useRouter();
  const [dataQuestion, setDataQuestion] = useState(null);
  const [navListSideBar, setNavLIstSideBar] = useState([]);
  const [isActiveSidebar, setIsActiveSidebar] = useState(0);
  const [selectedQustionList, setSelectedQuestionList] = useState({});
  const [isConfirmationPage, setIsConfirmationPage] = useState(false);

  const useGetDataQuestion = useCallback(async () => {
    if (dtwControlId) {
      const result = await getDataQuestion({ dtwControlId });
      setDataQuestion(result);
    }
  }, [dtwControlId, isActiveSidebar]);

  useEffect(() => {
    useGetDataQuestion();
  }, [useGetDataQuestion]);

  const parseNavList = useCallback(() => {
    const a = [];
    dataQuestion?.dtwChseSurveyAreas.forEach((i) => {
      a.push({ title: i.area });
    });
    setNavLIstSideBar(a);
  }, [dataQuestion]);

  const getSelectedQustion = useCallback(() => {
    if (dataQuestion) {
      const [dataSelected] = dataQuestion.dtwChseSurveyAreas.filter(
        (a, i) => i === isActiveSidebar,
      );
      setSelectedQuestionList(dataSelected);
    }
  }, [isActiveSidebar, dataQuestion]);

  useEffect(() => {
    if (dataQuestion) {
      parseNavList();
    }
  }, [parseNavList]);

  useEffect(() => {
    getSelectedQustion();
  }, [getSelectedQustion]);

  return (
    <Page
      sidebar
      navListSidebar={navListSideBar}
      sidebarOnePage
      isActiveSidebar={isActiveSidebar}
      onChangeSidebar={(i) => {
        setIsActiveSidebar(i);
        setIsConfirmationPage(false);
      }}
      onChangeSidebarConfirm={() => {
        setIsConfirmationPage(true);
        setIsActiveSidebar(null);
      }}
      isActiveConfirmPage={isConfirmationPage}
    >
      <div>
        <BreadCrumbs
          links={[
            {
              path: '/pengendalian-dtw',
              title: 'Pengendalian Daya Tarik Wisata',
            },
            { path: '/pengendalian-dtw/buat-baru', title: 'Buat Baru' },
            {
              path: '/pengendalian-dtw/buat-baru/survey-chse',
              title: 'Survei CHSE',
            },
          ]}
        />
        <div className="flex w-full flex-col items-center">
          <div className="mt-6 mb-8 text-2xl font-semibold">
            Survei CHSE {dataQuestion?.chseSurveyType}
          </div>
          <div className="w-[70%]">
            {isConfirmationPage ? (
              <FormConfirmChse
                listOfQuestion={dataQuestion?.dtwChseSurveyAreas}
                dtwControlId={router.query.dtwControlId}
              />
            ) : (
              <FormSurveyChse
                listOfQuestion={selectedQustionList}
                dtwControlId={router.query.dtwControlId}
                totalPage={navListSideBar.length}
                pageActive={isActiveSidebar + 1}
              />
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SurveiChseBySlugPage;
