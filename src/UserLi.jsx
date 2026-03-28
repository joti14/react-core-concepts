export default function UserLi({user}) {
    const {name, company, address} = user;
    return (
        <div>
            <div className="card">
            <h3>Name: {name}</h3>
            <p>Company Name: {company.name}</p>
            <p>City: {address.city}</p>
        </div>
        </div>
    )
}