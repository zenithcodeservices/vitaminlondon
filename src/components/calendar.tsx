import styles from "../styles/Calendar.module.css";
import Event from '../pages/types/Event'
import { useState } from "react";

export default function Calendar() {

    const [events, setEvents] = useState<Event[]>([]);
    const [form, setForm] = useState({ name: '', day: '', time: '' })

    const addEvent = (event: Event) => {
        setEvents([...events, event])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addEvent(form)
        setForm({ name: '', day: '', time: '' })
    }
        
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    return (
      <>
      <table className={styles.calendar}>
            <thead>
                <tr>
                    <th />
                    {days.map((day) => (
                        <th className={styles.dayColumn} key={day}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {times.map((time) => (
                    <tr key={time}>
                        <td className={styles.disabled}>{time}</td>
                        {days.map((day) => {
                            const dayEvents = events.filter((event) => event.day === day && event.time === time)
                            return (
                                <td key={`${day}-${time}`}>
                                {dayEvents.map((event, index) => (
                                    <div key={event.name}>
                                        {event.name}
                                    </div>
                                ))}
                                </td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
        <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Event name" />
                <select className={styles.select} name="day" value={form.day} onChange={handleChange}>
                    <option value="">Select day</option>
                    {days.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select className={styles.select} name="time" value={form.time} onChange={handleChange}>
                    <option value="">Select time</option>
                    {times.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <button className={styles.submit} type="submit">Add event</button>
            </form>
        </>
    )

}