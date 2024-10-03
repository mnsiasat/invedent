//import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda'
import {
  APIGatewayEvent,
  APIGatewayEventRequestContext,
  Handler
} from 'aws-lambda'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

interface InventoryItem {
  id: string
  name: string
  quantity: number
}

interface InventoryUpdateEvent {
  itemId: string
  quantityChange: number
}

class InventoryEventHandler {
    private inventory: Map<string, InventoryItem> = new Map();

    // TODO: Implement method to handle inventory update events
    handleUpdate(event: InventoryUpdateEvent): void {
        console.log(event)
    }

    // TODO: Implement method to get current inventory state
    getInventory(): InventoryItem[] {
        // Your code here
        return Array(1).fill(
            {
                id: '',
                name: '',
                quantity: 0
            } as InventoryItem
        )
    }
}

export const handler = new InventoryEventHandler()