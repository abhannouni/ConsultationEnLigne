import CardDoctor from "../../components/Card";
const doctorInfo =[ {
    name: 'John Doe',
    specialty: 'Cardiology',
    status: 'Disponible',
    bio: 'Dr. John Doe is a highly experienced cardiologist with over 15 years of experience.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    id: '1',
  },
  {
    name: 'John Doe',
    specialty: 'Cardiology',
    status: 'Disponible',
    bio: 'Dr. John Doe is a highly experienced cardiologist with over 15 years of experience.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    id: '1',
  },
  {
    name: 'John Doe',
    specialty: 'Cardiology',
    status: 'Disponible',
    bio: 'Dr. John Doe is a highly experienced cardiologist with over 15 years of experience.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    id: '1',
  },
  {
    name: 'John Doe',
    specialty: 'Cardiology',
    status: 'Disponible',
    bio: 'Dr. John Doe is a highly experienced cardiologist with over 15 years of experience.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    id: '1',
  }];



function EmployeHome() {

    return (
            <div className="mt-6 grid grid-cols-2  items-start gap-3">
                {doctorInfo.map((doctor, index) => (
                    <CardDoctor key={index} {...doctor} />
                ))}
            </div>
        // <main className="h-[5000px]">

            
        // </main>
        // <MedicalRecord {...patientData} />
    );
}

export default EmployeHome;