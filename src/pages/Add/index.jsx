import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../.././firebase';
import { Section } from '../../components/Section/styles'

const Add = () => {

  const addContact = async (formDataObj) => {
    const docRef = await addDoc(collection(db, "contacts"), formDataObj);
    console.log('added' + docRef);
  }

  return (
    <Section>
      <h2>Add contact</h2>
      <form
        onSubmit={(e) =>{
          e.preventDefault();
          const formData = new FormData(e.target)
          const formDataObj = {
            firstName: formData.get("firstName") ?? "",
            lastName: formData.get("lastName") ?? "",
          }
          addContact(formDataObj)
        }}>
        <div className="form-control">
          <label htmlFor="firstName">First name</label>
          <input 
            id="firstName"
            name="firstName" />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last name</label>
          <input 
            id="lastName"
            name="lastName" />
        </div>
        <div className="form-control">
          <button type="submit">Add contact</button>
        </div>
      </form>
    </Section>
  )
}

export default Add