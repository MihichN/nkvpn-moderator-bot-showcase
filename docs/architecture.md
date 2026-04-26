# Architecture

```text
Telegram Update -> Bot Router -> Command Handler -> Support API
                         |              |
                         v              v
                    UI Keyboard      Ticket State
```

## Notes

- Command parsing is separated from support API calls.
- Moderator actions are confirmed before mutating ticket state.
- Ticket status transitions are delegated to the support API.
- Bot messages never contain internal secrets.
