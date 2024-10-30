import PropTypes from "prop-types"



function Link({route}) {

  return (
    <li className="mr-10 mt-6 mb-6 hover:bg-red-600 ">
    <a href={route.path}>{route.name}</a>
    </li>
  )
}
Link.propTypes = {
  route: PropTypes.object
}

export default Link
