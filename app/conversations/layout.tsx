import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'
import getConversations from '../actions/getConversations'

const ConversationsLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const conversations = await getConversations()

  return (
    <Sidebar>
      <ConversationList initialItems={conversations} />
      <div className='h-full'>{children}</div>
    </Sidebar>
  )
}

export default ConversationsLayout
