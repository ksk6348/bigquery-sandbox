import {BigQuery} from '@google-cloud/bigquery';


const insertTest = async (query: string) => {
  const bigqueryClient = new BigQuery()

  const result = await bigqueryClient.query(query)
  console.log(result)
}

const query = [
  `INSERT test.test_log (test_case, status, created_at)`,
  `VALUES`,
  `('test1', 'success', '2019-12-08T18:37:00')`,
].join('')

insertTest(query)
