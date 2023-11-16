import React from 'react'

export default function Brand_explore() {
    return (
        <div>
            <div className='monthly_report_section row mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex flex-column month_labels'>
                        <label>
                            Report for 1 month
                        </label>

                        <label>
                            Reporting period: 07 July 2023 - 07 August 2023
                        </label>
                    </div>

                    <div className='d-flex'>
                        <div className='months_tabs_section'>
                            <button className='month_tabs active_month_tabs'>
                                1 month
                            </button>

                            <button className='month_tabs'>
                                3 month
                            </button>

                            <button className='month_tabs'>
                                6 month
                            </button>
                        </div>

                        <button className='mx-2 calender_btn'>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>

                <div>
                    <table className='brands_reports_table'>
                        <tr>
                            <td>
                                <div>
                                    Influencers <span style={{color:'#FF0000'}}>-19%</span>
                                </div>

                                <div>
                                    273
                                </div>
                            </td>

                            <td>
                                <div>
                                    Mentions <span style={{color:'#FF0000'}}>-19%</span>
                                </div>

                                <div>
                                    566
                                </div>
                            </td>

                            <td>
                                <div>
                                    Ad. Mentions <span style={{color:'#FF0000'}}>-19%</span>
                                </div>

                                <div>
                                    559
                                </div>
                            </td>

                            <td>
                                <div>
                                    Views <span style={{color:'#FF0000'}}>-19%</span>
                                </div>

                                <div>
                                    30.65M
                                </div>
                            </td>

                            <td>
                                <div>
                                    Approx. budget <span style={{color:'#FF0000'}}>-19%</span>
                                </div>

                                <div>
                                    $748.51k
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='monthly_report_section row mt-3'>
                <div className='col-lg-4'>
                    <label>Mention dynamics on YouTube</label>

                    <div>

                    </div>
                </div>
                
                <div className='col-lg-8'>
                    <img src={require('../../../Imagez/Dashboard/All/chart.png')} width={700}/>
                </div>
            </div>
        </div>
    )
}
