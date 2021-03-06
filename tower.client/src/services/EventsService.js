import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";



class EventsService{
    async createEvent(body){
        const res = await api.post('api/events', body)
        logger.log('created event', res.data)
        AppState.accountEvents.push(res.data)
        return res.data
    }
    async getEvents(query = ''){
        const res = await api.get('api/events' + query)
        logger.log('[get events]', res.data)
        AppState.events=res.data
    }
  

    async getEvent(id){
        const res = await api.get('api/events/'+ id)
        logger.log('[get event]', res.data)
        AppState.activeEvent  =res.data
    }

    async editEvent(body){
        const res = await api.put('api/events/'+ body.id, body)
        logger.log('edit event', res.data)
        AppState.activeEvent=res.data
    }
    async deleteEvent(eventId){
        const res = await api.delete('api/events/'+ eventId)
        logger.log('delete event', res.data)
        AppState.accountEvents = AppState.accountEvents.filter(e=>e.id!=eventId)}
}


export const eventsService = new EventsService()