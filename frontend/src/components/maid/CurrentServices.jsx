import React , {useEffect , useState }from 'react'
import NoData from '../common/NoData'
import Loading from '../common/Loading'

const RequestCol = ({ text }) => {
    return (
      <p className='font-bold m-4  w-32'>{text}</p>
    )
  }

  const Request = ({ request,index ,user}) => {
    return (
      <div className={index%2==0?'bg-slate-100':''}>
        <div className='flex flex-row '>
          <p className='m-4 w-32'>{request.status}</p>
          <p className='m-4 w-32'>{request.from}</p>
          <p className='m-4 w-32'>{request.serviceName}</p>
          <p className='m-4 w-32'>{request.time}</p>
          <p className='m-4 w-32'>{request.location}</p>
        </div>
      </div>
    )
  }

  
const CurrentServices = ({provider}) => {
  const [currentServices, setCurrentServices] = useState()
  useEffect(() => {
    if(provider && provider.current)
        var currentServices = provider.current.filter((app) => app.status === 'accepted-payment-complete' )
    setCurrentServices(currentServices)
  }, [provider])
  
  if (!currentServices) return (<Loading />)
  if(currentServices.length === 0)  return (<NoData />)
  return (
    <div className='flex flex-col items-center'>
      <h1 className='section-heading'>Current Services {provider.category}</h1>
      <div className='w-auto'>
        <div className='flex flex-row'>
          <RequestCol text={'Status'} />
          <RequestCol text={'Name'} />
          <RequestCol text={'Service Type'} />
          <RequestCol text={'Time'} />
          <RequestCol text={'Address'} />
        </div>
        {
          currentServices.map((req, index) => <Request request={req} index={index} key={index} />)
        }
      </div>

    </div>
  )
}

export default CurrentServices
