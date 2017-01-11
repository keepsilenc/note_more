//添加
export const addNote = ({dispatch})=>{
	dispatch('ADD_NOTE')
}
//编辑
export const editNote = ({dispatch},e)=>{
	dispatch('EDIT_NOTE',e.target.value)
}
//删除
export const deleteNote=({dispatch})=>{
	dispatch('DELETE_NOTE')
}
//更新状态
export const updateActiveNote=({dispatch},note)=>{
	dispatch('SET_ACTIVE_NOTE',note)
}
//切换
export const toggleFavorite=({dispatch})=>{
	dispatch('TOGGLE_FAVORITE')
}

export const change=({dispatch})=>{
	dispatch('CHANGE')
}
//按照更改时间，排序notes
export const sortByTime=({dispatch})=>{
	dispatch('SORT_BY_TIME')
}
//设置标题
export const setTittle=({dispatch},text)=>{
	dispatch('SET_TITTLE',text)
}	