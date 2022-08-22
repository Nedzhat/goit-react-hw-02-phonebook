import PropTypes from 'prop-types';

export const ContactList = ({visibleContacts, deleteContact}) => {
    return <ul>
          {visibleContacts.map(({id, name, number}) => {
            return <li key={id}>
              <span>
                {name}:
              </span>
              <span>
                {number}
              </span>
              <button onClick={() => deleteContact(id)}>Удалить</button>
            </li>
          })}
      </ul>
}

ContactList.propTypes = {
    visibleContacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}