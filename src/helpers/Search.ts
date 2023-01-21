export default function SearchField({value, data, setData, initData}: {value: string, data: any, setData: any, initData: any}) {
    value.length && setData(data?.filter((user: { student: { full_name: { [s: string]: unknown } | ArrayLike<unknown> }; full_name: { [s: string]: unknown } | ArrayLike<unknown> }) => {
      if(user.student) return Object.values(user.student.full_name).join('').toLowerCase().includes(value.toLowerCase())
      if(!user.student) return Object.values(user.full_name).join('').toLowerCase().includes(value.toLowerCase())
  }))
  !value.length && setData(initData)
  }