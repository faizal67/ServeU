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
          <p className='m-4 w-32'>{request.name}</p>
          <p className='m-4 w-32'>{request.serviceName}</p>
          <p className='m-4 w-32'>{request.time}</p>
          <p className='m-4 w-32'>{request.address}</p>
          <p className='m-4 w-32'>{request.reply}</p>
        </div>
      </div>
    )
  }

const requests = [
    {
      status: 'pending',
      name: 'Sunil',
      serviceName: 'Maid',
      time: 'Morning(7AM-9AM)',
      address: 'Pragati Vihar Ghaziabad',
      reply: false,
      message: 'start Message'
    },
    {
      status: 'completed',
      name: 'John',
      serviceName: 'Gardening',
      time: 'Evening(5PM-8PM)',
      address: '123 Main Street',
      reply: true,
      message: 'Some message for completed request'
    },
    {
      status: 'pending',
      name: 'Alice',
      serviceName: 'Cook',
      time: 'Morning(10AM-12PM)',
      address: '456 Elm Street',
      reply: false,
      message: 'Request for cooking service'
    },
    {
      status: 'pending',
      name: 'Emily',
      serviceName: 'Plumbing',
      time: 'Afternoon(1PM-4PM)',
      address: '789 Oak Avenue',
      reply: false,
      message: 'Plumbing issue in the kitchen'
    }
  ];
  
const CurrentServices = ({provider}) => {

  const [currentServices, setCurrentServices] = useState()
  useEffect(() => {
    setCurrentServices(provider.history)
  }, [provider])
  if (!currentServices) return (<Loading />)
  // console.log('currentServices',currentServices)
  if(currentServices.length == 0)
  return (<NoData />)
  return (
    <div className='flex flex-col items-center'>
      <h1 className='section-heading'>Current Services maid</h1>
      <div className='w-auto'>
        <div className='flex flex-row'>
          <RequestCol text={'Status'} />
          <RequestCol text={'Name'} />
          <RequestCol text={'Service Type'} />
          <RequestCol text={'Time'} />
          <RequestCol text={'Address'} />
          <RequestCol text={'Reply'} />
          <RequestCol text={'Message'} />
        </div>
        {
          requests.map((req, index) => <Request request={req} index={index} key={index} />)
        }
      </div>

    </div>
  )
}

export default CurrentServices
