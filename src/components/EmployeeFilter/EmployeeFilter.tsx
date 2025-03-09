import chevronup from "../../assets/icons/charm_chevron-up.svg";
import chevrondown from "../../assets/icons/charm_chevron-down.svg";

type Employee = {
    id: string;
    name: string;
    job: string;
    phone: string | number;
    admission_date: string;
    image: string;
};

interface EmployeeFilterProps {
    employees: Employee[];
    searchTerm: string;
}

const EmployeeFilter: React.FC<EmployeeFilterProps> = ({
    employees,
    searchTerm,
}) => {
    const filteredEmployees = employees.filter((employee) =>
        [employee.name, employee.job, employee.phone.toString()].some((field) =>
            field
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(
                    searchTerm
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase()
                )
        )
    );

    return (
        <div className="employee-list">
            {filteredEmployees.map((employee) => (
                <div className="employee-item" key={employee.id}>
                    <div className="employee-info">
                        <img
                            src={employee.image}
                            alt={employee.name}
                            id="employee-img"
                        />
                        <h3>{employee.name}</h3>
                        <h3 id="employee-job">{employee.job}</h3>
                        <h3 id="employee-admission">
                            {new Date(
                                employee.admission_date
                            ).toLocaleDateString()}
                        </h3>
                        <h3 id="employee-phone">{employee.phone}</h3>
                    </div>
                    <div className="expand-btn">
                        <img src={chevrondown} alt="Expand" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmployeeFilter;
