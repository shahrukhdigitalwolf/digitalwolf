import React from 'react'
import SubHeading from './sub-heading'
import parse from 'html-react-parser'

function OurKeypoints(props) {
  return (
    <div className='container mx-auto px-5'>
        <div>
            <SubHeading text='Our Keypoints'/>
        </div>
        <div>
            <p className='text-[30px]'>{parse(props.keyPointsHead)}</p>
        </div>
        <div className='flex flex-wrap gap-y-5 py-5'>
            {
                props.keyPointsCard.map((ele,i)=>{
                    return(
                        <div key={i} className='w-[100%] lg:w-[25%] px-3 mb-5'>
                            <div className={`bg-[#F8F8F8] px-5 py-5 lg:h-[600px] ${ele.marginTop}`}>
                                <p className='text-[23px] font-bold mb-3'>{ele.keyPointsCardHead}</p>
                                <p>{ele.keyPointsCardDesc}</p>
                            </div>
                        </div>
                    )
                })
            }
            {/* <div className='w-[100%] lg:w-[25%] px-3 mb-5 '>
                <div className='bg-[#F8F8F8] px-5 py-5 lg:h-[600px] lg:mt-56'>
                    <p className='text-[23px] font-bold mb-3'>{props.keyPointsCardHead2}</p>
                    <p>{props.keyPointsCardDesc2}</p>
                </div>
            </div>
            <div className={`w-[100%] lg:w-[25%] px-3 mb-5`}>
                <div className='bg-[#F8F8F8] px-5 py-5 lg:h-[600px] lg:mt-28'>
                    <p className='text-[23px] font-bold mb-3'>{props.keyPointsCardHead3}</p>
                    <p>{props.keyPointsCardDesc3}</p>
                </div>
            </div>
            <div className={`w-[100%] lg:w-[25%] px-3 mb-5`}> 
                <div className='bg-[#F8F8F8] px-5 py-5 lg:h-[600px]'>
                    <p className='text-[23px] font-bold mb-3'>{props.keyPointsCardHead4}</p>
                    <p>{props.keyPointsCardDesc4}</p>
                </div>
            </div>*/}
        </div>
    </div>
  )
}

export default OurKeypoints