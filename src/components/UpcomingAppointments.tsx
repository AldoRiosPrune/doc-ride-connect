
import AppointmentCard from "./AppointmentCard";

interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
  location: string;
  avatar: string;
}

interface UpcomingAppointmentsProps {
  appointments: Appointment[];
}

const UpcomingAppointments = ({ appointments }: UpcomingAppointmentsProps) => {
  if (appointments.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">📅</span>
        </div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">No tienes citas próximas</h3>
        <p className="text-gray-500 mb-4">¡Es un buen momento para agendar tu próximo chequeo!</p>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          Agendar nueva cita →
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} {...appointment} />
      ))}
    </div>
  );
};

export default UpcomingAppointments;
