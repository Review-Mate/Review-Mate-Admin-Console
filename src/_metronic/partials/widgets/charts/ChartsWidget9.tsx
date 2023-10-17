/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
}

const ChartsWidget9: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))

    const chart = new ApexCharts(chartRef.current, getChartOptions(height))
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, mode])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recent Orders</span>

          <span className='text-muted fw-semibold fs-7'>More than 500 new orders</span>
        </h3>

        {/* begin::Toolbar */}
        <div className='card-toolbar' data-kt-buttons='true'>
          <a
            className='btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1'
            id='kt_charts_widget_8_year_btn'
          >
            Year
          </a>

          <a
            className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1'
            id='kt_charts_widget_8_month_btn'
          >
            Month
          </a>

          <a
            className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4'
            id='kt_charts_widget_8_week_btn'
          >
            Week
          </a>
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        <div
          ref={chartRef}
          id='kt_charts_widget_8_chart'
          style={{height: '350px'}}
          className='card-rounded-bottom'
        ></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ChartsWidget9}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const strokeColor = getCSSVariableValue('--bs-gray-300')

  const color1 = getCSSVariableValue('--bs-warning')
  const color1Light = getCSSVariableValue('--bs-warning-light')

  const color2 = getCSSVariableValue('--bs-success')
  const color2Light = getCSSVariableValue('--bs-success-light')

  const color3 = getCSSVariableValue('--bs-primary')
  const color3Light = getCSSVariableValue('--bs-primary-light')

  return {
    series: [
      {
        name: '숙박',
        data: [30, 30, 50, 50, 35, 35, 34, 25, 38],
      },
      {
        name: '렌터카',
        data: [55, 20, 20, 20, 30, 70, 56, 59, 58],
      },
      {
        name: '식당',
        data: [60, 60, 40, 40, 30, 30, 36, 59, 74],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'line',
      height: height,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: 'straight',
      show: true,
      width: 2,
      colors: [color1, color2, color3],
    },
    xaxis: {
      type: 'category',
      offsetX: 0,
      offsetY: 0,
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return val + ' 개'
        },
      },
    },
    colors: [color1Light, color2Light, color3Light],
    grid: {
      borderColor: borderColor,
      // strokeDashArray: 4,
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    markers: {
      colors: [color1, color2, color3],
      strokeColors: [color1, color2, color3],
      strokeWidth: 3,
    },
  }
}
