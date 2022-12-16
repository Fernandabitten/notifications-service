import { InMemorynotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SandNotification } from './send-notification';

describe('send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemorynotificationsRepository();
    const sandNotification = new SandNotification(notificationsRepository);

    const { notification } = await sandNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
