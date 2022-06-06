const sortType = (type, sort) => sort.includes(type)?sort.charAt(0)==='-'?'▲':'▼':''

export default sortType;