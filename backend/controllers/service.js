const serviceRouter = require('express').Router()
const Service = require('../models/service')
const Provider = require('../models/provider')
const ServiceUser = require('../models/serviceUser')



// serviceRouter.get('/', (request, response) => {
//   Blog.find({}).then(services => {
//     response.json(services)
//   })
// })

// serviceRouter.get('/:id', (request, response, next) => {
//   ServiceList.findById(request.params.id)
//     .then(service => {
//       if (service) {
//         response.json(service)
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => next(error))
// })

serviceRouter.post('/',async (request, response) => {
  const providerId = request.body.providerId
  const serviceUserId = request.body.serviceUserId
  const body = request.body
  const provider = await Provider.findById(providerId)
  const serviceUser = await ServiceUser.findById(serviceUserId)

  const service = new Service({
    status: 'pending',
    from: serviceUser.displayName,
    to: provider.displayName,
    time: body.time,
    serviceCategory: provider.category,
    serviceName: body.serviceName,
    price: body.price,
    rating : 0,
    review : '',
    location : body.location,
    timestamp : new Date()
  })

  const savedService = await service.save()
  provider.requests = provider.requests.concat(savedService.id)
  await provider.save()
  serviceUser.applied = serviceUser.applied.concat(savedService.id)
  await serviceUser.save()
  response.json(savedService)
})

// serviceRouter.delete('/:id', (request, response, next) => {
  
//   ServiceList.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// serviceRouter.put('/:id', (request, response, next) => {
//   const body = request.body

//   const updatedService = {
//     serviceName: body.serviceName,
//     time: body.time,
//     price: body.price,
//     available: body.available,
//   }

//   ServiceList.findByIdAndUpdate(request.params.id, updatedService, { new: true ,runValidators: true, context: 'query'})
//     .then(updatedService => {
//       response.json(updatedService)
//     })
//     .catch(error => next(error))
// })

module.exports = serviceRouter