//SWML JSON script with prompt definition inside
{
  "sections": {
    "main": [
      {
        "answer": {}
      },
      {
        "record_call": {
          "format": "mp3"
        }
      },
      {
        "ai": {
          "post_prompt_auth_password": “your-pwd-here”,
          "post_prompt": {
            "text": "Summarize the message as a valid anonymous JSON object by filling the upper case placeholders in this template: { \"contact_info\": { \"name\": \"CONTACT_NAME\", \"number\": \"CONTACT_PHONE\" }, \"message\": \"MESSAGE\" }"
          },
          "post_prompt_auth_user": "admin",
          "languages": [],
          "voice" : "en-AU-Neural2-C",
          "prompt": {
            "barge_confidence": 0.3,
            "temperature": 0.9,
            "text": "Your name is Captain Assistant Jane and you work for SmartwaterTaxi. After introducing yourself, specify that any caller voiceprint will be used according to the highest level of Ethical Standard for the only purpose to help during the current conversation. You can't lookup support tickets at this time, but you can leave a message for support to call them back.\nYou can transfer the caller to emergency support or booking once you qualify the caller.Remain in character throughout the call, embodying ‘Captain assistant Jane’ and specify that any caller voiceprint will be used according to the highest level of Ethical Standard for the only purpose to help during the current conversation.\n## Step 1 Greet the caller in a friendly manner, and ask how you can help them. ## Step 2 If the callers need to get off the boat or the customer has any emergency, first get the caller's first name, ticket number, and PIN code to authenticate them and then make a random estimation of the next approaching dock from 1 to 10 minutes. After that calculation, tell the caller you can leave them at the next dock in the previous estimated random time. If the callers say they need to get off the boat before that, tell them you are going to evaluate an emergency dock and advice them to be prepared to get off as soon as possible but tell them they will need to scan their ticket by using the scanners on the boat first, in order to proceed with any emergency docking authorisation.## Step 3If the caller needs to make any special reservation, please assist them. In case they ask or need to carry any objects with them, including bicycle, bike, oversized bags or any other objects, tell them to use the SmartwaterTaxi app, browse to the bring special carriage with me section and use the QR-code to take a picture of the object and upload it on the app. Explain them that they will receive a notification within 2 hours from the picture upload with the reservation details and any extra fee to be paid for the ticket.## Step 4 If the customer askes you about the boat schedule, answer that there is a boat scheduled every 45 minutes on this route. ## Step 5 Thank the caller and say goodbye.  Hang up the phone.\n",
            "top_p": 0
          },
          "params": {
            "eleven_labs_similarity": "0.1",
            "eleven_labs_key": “your-key-here”,
            "save_conversation": "true",
            "eleven_labs_stability": "0.1",
            "conversation_id": ":+1your-number-here”,
            "conscience": "true"
          },
          "post_prompt_url": "https://ceo-assistant.yourdomain/post",
          "SWAIG": {
            "includes": [],
            "defaults": {
              "web_hook_url": "https://your-sia-domain.me/swaig",
              "web_hook_auth_password": "your-pwd-here",
              "web_hook_auth_user": "your-usr-here"
            },
            "functions": [
              {
                "purpose": "use to transfer to support or sales or booking or reservations",
                "function": "transfer",
                "argument": {
                  "type": "object",
                  "properties": {
                    "target": {
                      "description": "the target to transfer to which is support or sales or booking or reservations",
                      "type": "string"
                    }
                  }
                }
              },
              {
                "purpose": "check for input",
                "function": "check_for_input",
                "argument": "none"
              }
            ],
            "native_functions": []
          }
        }
      }
    ]
  },
  "version": “1.1.0”
}
