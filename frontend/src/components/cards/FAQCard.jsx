import React from 'react'

const FAQCard = ({ques,ans}) => {

    const answer =  ans.split('\n').map(str => <p>{str}</p>)
  return (
    <div className='FAQ-card'>
      <h4 className='FAQ-card-question'>{ques}</h4>
      {/* <p className='FAQCard-answer'>{answer}</p> */}
    </div>
  )
}

export default FAQCard
