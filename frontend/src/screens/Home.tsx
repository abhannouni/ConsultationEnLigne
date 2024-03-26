import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import NavbarDefault from "../components/Navbar"
import Card from "../components/Card"

const employees = [
  {
    name: "John Doe",
    specialite: "Développeur",
    state: "Actif",
    jobs: ["Développement web", "Développement mobile"],
    id: "1"
  },
  {
    name: "Jane Doe",
    specialite: "Designer",
    state: "Actif",
    jobs: ["Design web", "Design mobile"],
    id: "2"
  },
  {
    name: "John Smith",
    specialite: "Développeur",
    state: "Actif",
    jobs: ["Développement web", "Développement mobile"],
    id: "3"
  },
  {
    name: "Jane Smith",
    specialite: "Designer",
    state: "Actif",
    jobs: ["Design web", "Design mobile"],
    id: "4"
  },
];


export default function Home() {
  return (
        <div>
          {/* <Header/> */}
          {/* <HeroSection /> */}
          <NavbarDefault />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 m-1.5">
            {employees.map((employee) => (
              <Card
                name={employee.name}  
                specialite={employee.specialite}
                state={employee.state}
                id={employee.id}
              />
            ))}
            </div>
        </div>
  )
}
