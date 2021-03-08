import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import FilterName from './Components/FilterName/FilterName';
import classNames from 'classnames/bind';
import Logo from 'Components/Logo/Logo';
import contactsAction from 'redux/contactsRedux/contactsAction';
import contactsOperations from 'redux/contactsRedux/contactsOperations';
//*import style
import style from './App.module.css';
import appearSlide from './transitionsCSS/appearSlide.module.css'; /**модули CSS указывать до CSSTransition */
import fade from './transitionsCSS/fade.module.css';
import { CSSTransition } from 'react-transition-group';

/* eslint react/prop-types: 1 */

let mixStyle = classNames.bind(style);

class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ),
    isLoadingContact: PropTypes.bool,
    clearFilter: PropTypes.func,
    fetchContacts: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, clearFilter, isLoadingContact } = this.props;
    return (
      <>
        <CSSTransition
          //TODO добавляем анимацию появления Logo при загрузке страницы
          in={true}
          appear={true}
          timeout={500}
          classNames={appearSlide}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>
        <Form
        // ? функция добавления контакта реализована через Redux
        ></Form>
        <CSSTransition
          //TODO Анимация появления-исчезания поля для фильтра контактов по условию
          in={contacts.length > 1}
          timeout={500}
          classNames={fade}
          unmountOnExit
          onExit={() => clearFilter()}
        >
          <FilterName />
        </CSSTransition>
        <h2 className={mixStyle('title', 'center')}>Contacts</h2>
        {isLoadingContact ? (
          <Loader
            className={mixStyle('center')}
            type="Oval"
            color="#1976d2"
            height={100}
            width={100}
            timeout={0} //3 secs
          />
        ) : (
          <ContactList />
        )}
      </>
    );
  }
}

const mapStateToProps = ({ contacts: { items, loading } }) => {
  return {
    contacts: items,
    isLoadingContact: loading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clearFilter: () => dispatch(contactsAction.changeFilter('')),
    fetchContacts: () => dispatch(contactsOperations.fetchContact()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
