/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ChartsWidget9,
  ChartsWidget1,
  ChartsWidget10,
  StatisticsWidget7,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Raw */}
    <div className='row g-5 g-xl-10'>
      {/* begin::Col */}
      <div className='col col-8'>
        <div className='row mb-5 mb-xl-10'>
          <div className='col-4'>
            <StatisticsWidget7
              className='card-xl-stretch'
              color='primary'
              title='400k Impressions'
              description='리뷰 작성률 (일)'
              progress='76%'
            />
          </div>
          <div className='col-4'>
            <StatisticsWidget7
              className='card-xl-stretch'
              color='primary'
              title='400k Impressions'
              description='리뷰 작성률 (주)'
              progress='68%'
            />
          </div>
          <div className='col-4'>
            <StatisticsWidget7
              className='card-xl-stretch'
              color='primary'
              title='400k Impressions'
              description='리뷰 작성률 (월)'
              progress='70%'
            />
          </div>
        </div>
        <ChartsWidget9 className='' />
      </div>
      {/* end::Col */}
      {/* begin::Col */}
      <div className='col col-4'>
        <div className=''>
          <ChartsWidget10 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className=''>
          <ChartsWidget1 className='card-xl-stretch mb-xl-8' />
        </div>
      </div>
      {/* end::Col */}
    </div>
    {/* end::Raw */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
