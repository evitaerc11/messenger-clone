import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'
import getConversations from '../actions/getConversations'
import getUsers from '../actions/getUsers'

const ConversationsLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const conversations = await getConversations()
  const users = await getUsers()

  return (
    <Sidebar>
      <ConversationList initialItems={conversations} users={users} />
      <div className='h-full'>{children}</div>
    </Sidebar>
  )
}

export default ConversationsLayout
