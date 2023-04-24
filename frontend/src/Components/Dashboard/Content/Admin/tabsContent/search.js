// filtros de pesquisa por usuário 

export const changeInTable = (inTable, filter, field, filterLabel, key) => {
  const newInTable = { ...inTable }

  if (newInTable.mode === 'users') newInTable.mode = 'filtered'

  let newFilter = [ ...filter ]

  if (!key.length && newInTable.mode === 'filtered') {
    newFilter[0] = ''
    newInTable.mode = field
  } else {
    newFilter[0] = filterLabel
    newFilter[1] = key
  }

  return { inTable: newInTable,  filter: newFilter }
}

export const changeFilter = (filtersTerms, i, value) => {
  const newFiltersTerms = { ...filtersTerms }

  newFiltersTerms[i] = value

  return newFiltersTerms
}

export const searchByName = (field, filtersTerms, filter, inTable, key) => { 
  let newFiltersTerms

  if (field === 'users') newFiltersTerms = changeFilter(filtersTerms, 'name', key)

  if (field === 'users') newFiltersTerms.admin = 0

  const { inTable: newInTable, filter: newFilter } = changeInTable(inTable, filter, field, 'Name', key)

  newInTable.filtered = inTable[field].filter(({ name }) => name.toLowerCase().includes(key.toLowerCase()))

  return { inTable: newInTable, filtersTerms: newFiltersTerms, filter: newFilter }
}
