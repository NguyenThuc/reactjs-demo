import React from 'react'
import data from './sampleMovieData'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: 'Director',
    selector: (row) => row.director,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row) => row.year,
    sortable: true,
  },
]

export const Basic = () => <DataTable title="Movie List" columns={columns} data={data} pagination />

export default {
  title: 'Pagination/Basic',
  component: Basic,
}
