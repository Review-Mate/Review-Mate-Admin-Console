/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  MixedWidget8,
  CardsWidget7,
  CardsWidget20,
  ChartsWidget8,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <ChartsWidget8 className='card-xl-stretch mb-5 mb-xl-8' />
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget20
          className='h-md-50 mb-5 mb-xl-10'
          description='Active Projects'
          color='#F1416C'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
        <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='Professionals'
          icon={false}
          stats={357}
          labelColor='dark'
          textColor='gray-300'
        />
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
    </div>
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
