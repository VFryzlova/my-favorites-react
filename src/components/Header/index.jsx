import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchNameDay } from '../.././fetchers/fetchNameDay'
import { HeaderEl } from './styles'
import Search from '../Search'

const getTodaysDate = () => {
    const date = new Date()
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
}

const Header = ({contacts}) => {
	const { isLoading, isError, data } = useQuery('nameDay', fetchNameDay)

	return (
		<HeaderEl>
			<Link to="/login">Login</Link>
			<h1>Hello!</h1>
			<p>It is {getTodaysDate()}</p>
			<p className="name-day">
				{isLoading || isError ? '' : data[0].name + ' has a name-day'}
			</p>
			<Search contacts={contacts}/>
		</HeaderEl>
	)
}

export default Header
