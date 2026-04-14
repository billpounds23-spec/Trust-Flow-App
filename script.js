
const supabaseUrl = 'https://uuebwzbryczakntelppi.supabase.co'
const supabaseAnonKey = 'sb_publishable_WV6k8nsHTWBGMhD96AFLmg_PPUGnnZj'

const supabase = window.supabase.createClient(https://uuebwzbryczakntelppi.supabase.co, sb_publishable_WV6k8nsHTWBGMhD96AFLmg_PPUGnnZj)

console.log('Supabase connected:', supabase)

async function testRead() {
  const { data, error } = await window.db
    .from('leads')
    .select('*')

  if (error) {
    console.error('Read error:', error)
  } else {
    console.log('Read success:', data)
  }
}

testRead()

async function testInsert() {
  const { data, error } = await window.db
    .from('leads')
    .insert([
      {
        name: 'Test User',
        email: 'test@example.com',
        phone: '555-555-5555'
      }
    ])

  if (error) {
    console.error('Insert error:', error)
  } else {
    console.log('Insert success:', data)
  }
}

testInsert()