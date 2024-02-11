/*
Unified
==============
*/
export const ApiCallType = [
	'login',
	'webhook',
	'inbound'
] as const;

export type TApiCallType = typeof ApiCallType[number];

export const IntegrationAuthType = [
	'oauth1',
	'oauth2',
	'other',
	'token'
] as const;

export type TIntegrationAuthType = typeof IntegrationAuthType[number];

export const IntegrationCategory = [
	'passthrough',
	'hris',
	'ats',
	'auth',
	'crm',
	'enrich',
	'martech',
	'ticketing',
	'uc',
	'accounting',
	'storage',
	'commerce'
] as const;

export type TIntegrationCategory = typeof IntegrationCategory[number];

export const IntegrationPermission = [
	'auth_login',
	'accounting_account_read',
	'accounting_account_write',
	'accounting_transaction_read',
	'accounting_transaction_write',
	'accounting_invoice_read',
	'accounting_invoice_write',
	'accounting_contact_read',
	'accounting_contact_write',
	'accounting_payment_read',
	'accounting_payment_write',
	'accounting_taxrate_read',
	'accounting_taxrate_write',
	'accounting_organization_read',
	'commerce_item_read',
	'commerce_item_write',
	'commerce_collection_read',
	'commerce_collection_write',
	'commerce_inventory_read',
	'commerce_inventory_write',
	'commerce_location_read',
	'commerce_location_write',
	'ats_scorecard_read',
	'ats_scorecard_write',
	'ats_application_read',
	'ats_application_write',
	'ats_applicationstatus_read',
	'ats_candidate_read',
	'ats_candidate_write',
	'ats_interview_read',
	'ats_interview_write',
	'ats_job_read',
	'ats_job_write',
	'ats_company_read',
	'ats_document_read',
	'ats_document_write',
	'crm_company_read',
	'crm_company_write',
	'crm_contact_read',
	'crm_contact_write',
	'crm_deal_read',
	'crm_deal_write',
	'crm_event_read',
	'crm_event_write',
	'crm_lead_read',
	'crm_lead_write',
	'crm_pipeline_read',
	'crm_pipeline_write',
	'martech_list_read',
	'martech_list_write',
	'martech_member_read',
	'martech_member_write',
	'ticketing_customer_read',
	'ticketing_customer_write',
	'ticketing_ticket_read',
	'ticketing_ticket_write',
	'ticketing_note_read',
	'ticketing_note_write',
	'hris_employee_read',
	'hris_employee_write',
	'hris_group_read',
	'hris_group_write',
	'uc_call_read',
	'storage_file_read',
	'storage_file_write',
	'webhook'
] as const;

export type TIntegrationPermission = typeof IntegrationPermission[number];

export const IntegrationSupportWebhookType = [
	'virtual',
	'none',
	'native'
] as const;

export type TIntegrationSupportWebhookType = typeof IntegrationSupportWebhookType[number];

export const ObjectType = [
	'accounting_account',
	'accounting_transaction',
	'accounting_contact',
	'accounting_invoice',
	'accounting_payment',
	'accounting_taxrate',
	'accounting_organization',
	'commerce_item',
	'commerce_collection',
	'commerce_inventory',
	'commerce_location',
	'ats_application',
	'ats_applicationstatus',
	'ats_candidate',
	'ats_document',
	'ats_interview',
	'ats_job',
	'ats_scorecard',
	'ats_company',
	'crm_company',
	'crm_contact',
	'crm_deal',
	'crm_event',
	'crm_lead',
	'crm_pipeline',
	'hris_employee',
	'hris_group',
	'martech_list',
	'martech_member',
	'passthrough',
	'ticketing_note',
	'ticketing_ticket',
	'ticketing_customer',
	'uc_contact',
	'uc_call',
	'enrich_person',
	'enrich_company',
	'storage_file'
] as const;

export type TObjectType = typeof ObjectType[number];

export const PlanTerm = [
	'monthly',
	'yearly'
] as const;

export type TPlanTerm = typeof PlanTerm[number];

export const SupportInboundType = [
	'supported-required',
	'supported',
	'not-supported'
] as const;

export type TSupportInboundType = typeof SupportInboundType[number];

export const SupportOutboundType = [
	'supported',
	'not-supported'
] as const;

export type TSupportOutboundType = typeof SupportOutboundType[number];

export const WebhookDataType = [
	'INITIAL-PARTIAL',
	'INITIAL-COMPLETE',
	'VIRTUAL',
	'NATIVE'
] as const;

export type TWebhookDataType = typeof WebhookDataType[number];

export const WebhookEvent = [
	'updated',
	'created'
] as const;

export type TWebhookEvent = typeof WebhookEvent[number];

export interface IApiCall {
	readonly id?: string; // Unique identifier for this API call
	readonly created_at?: string | Date; // The date that this object was created
	workspace_id: string;
	integration_type: string; // The integration type
	external_xref?: string; // your customer's user ID
	name: string; // The called name of the API method
	path: string; // The called API method's HTTP verb and route path (PUT /crm/{integration}/deak/{id})
	size?: number; // The size of the response
	status: string; // The resulting HTTP status code (200)
	error?: string; // The error description (if status code is >= 400)
	connection_id?: string;
	ip_address?: string;
	type: TApiCallType; // The type of API Call being logged
	method: string;
	environment?: string;
}

export interface IConnection {
	readonly id?: string; // Unique identifier for this integration object
	readonly created_at?: string | Date; // The date that this integration object was created
	readonly updated_at?: string | Date; // The last date that this integration object was updated
	readonly workspace_id: string;
	integration_type: string; // The integration type
	external_xref?: string; // customer's user ID
	permissions: ( TIntegrationPermission )[];
	categories: ( TIntegrationCategory )[]; // The Integration categories that this connection supports
	auth?: IConnectionAuth;
	is_paused?: boolean; // Whether this integration has exceed the monthly limit of the plan
	auth_aws_arn?: string; // the AWS ARN / secretID for the stored auth field
	environment?: string;
	last_healthy_at?: string | Date;
	last_unhealthy_at?: string | Date;
	cursors_cache?: unknown[];
}

export interface IConnectionAuth {
	token?: string;
	access_token?: string;
	refresh_token?: string;
	expiry_date?: string | Date;
	expires_in?: number;
	emails?: string[];
	name?: string;
	app_id?: string;
	client_id?: string;
	client_secret?: string;
	consumer_key?: string;
	consumer_secret?: string;
	meta?: unknown;
	state?: string;
	other_auth_info?: string[]; // When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names
	api_url?: string;
	authorize_url?: string;
	token_url?: string;
	pem?: string; // the PEM X.509 certificate in Base64 ASCII format
	key?: string; // the private KEY X.509 certificate in Base64 ASCII format
	refresh_token_expires_in?: number;
	refresh_token_expires_date?: string | Date;
}

export interface IIntegration {
	type: string; // Identifier for this integration
	created_at?: string; // Date that this integration was supported (YYYY-MM-DD)
	updated_at?: string; // YYYY-MM-DD
	name: string; // The integration's name
	is_active?: boolean; // Is this integration active in this workspace
	categories: ( TIntegrationCategory )[]; // The categories of support solutions that this integration has
	api_docs_url?: string; // The URL of the integration's API documentation
	logo_url?: string; // The URL of the integration's logo
	in_progress: boolean; // If this integration is not yet available as it is currently being built by unified.to
	color?: string; // button background color for AUTH
	text_color?: string; // text color for AUTH
	fa_icon?: string; // font-awesome icon
	token_names?: string[]; // if auth_types = 'token'
	token_instructions?: string[]; // instructions for the user on how to find the token/key
	web_url?: string; // URL for the software vendor
	rate_limit_description?: string;
	beta?: boolean; // This integration is new and is still considered "beta"
	support: { [path in string]?: IIntegrationSupport };
	tested_at?: string | Date;
}

export interface IIntegrationSupport {
	methods?: { [path in string]?: boolean };
	list_sort_by_name?: boolean;
	list_sort_by_created_at?: boolean;
	list_sort_by_updated_at?: boolean;
	list_updated_gte?: boolean;
	list_user_id?: boolean;
	list_customer_id?: boolean;
	list_company_id?: boolean;
	list_contact_id?: boolean;
	list_application_id?: boolean;
	list_candidate_id?: boolean;
	list_deal_id?: boolean;
	list_job_id?: boolean;
	list_invoice_id?: boolean;
	list_order?: boolean;
	list_query?: boolean;
	list_limit?: boolean;
	list_offset?: boolean;
	search_twitter?: boolean;
	search_name?: boolean;
	search_linkedin_url?: boolean;
	search_email?: boolean;
	search_domain?: boolean;
	inbound_fields?: { [path in string]?: TSupportInboundType };
	outbound_fields?: { [path in string]?: TSupportOutboundType };
	webhook_type?: TIntegrationSupportWebhookType;
	webhook_events?: ( TWebhookEvent )[];
	list_parent_id?: boolean;
	list_account_id?: boolean;
	list_interview_id?: boolean;
	list_list_id?: boolean;
	list_ticket_id?: boolean;
}

export interface IInvoice {
	stripe_id: string;
	created_at: string | Date;
	amount: number;
	connections: number;
	plan: string;
}

export interface INotification {
	readonly id?: string; // Unique identifier for this notification object
	readonly created_at?: string | Date; // The date that this integration object was created
	readonly workspace_id?: string;
	title: string; // The title of the notification
	description?: string; // Longer description of this notification
	icon?: string; // The icon name
	link_url?: string; // Link to the event
	user_id?: string;
	user_name?: string;
}

export interface IPermission {
	readonly can_create_org: boolean;
	readonly can_leave_org: boolean;
	readonly can_downgrade: boolean;
	readonly can_invite: boolean;
	readonly can_update_org: boolean;
	readonly can_add_and_remove_admin: boolean;
	readonly can_accept_invite: boolean;
	readonly can_reject_invite: boolean;
	readonly can_pay: boolean;
	readonly can_get_invoices: boolean;
	readonly is_admin: boolean;
}

export interface IPlan {
	name: string;
	description?: string; // description
	max_connections?: number; // Maximum active connections (1+ API call per month)
	stripe_product_id?: string;
	stripe_price_id?: string;
	min_price?: number;
	price_per_mille_requests?: number;
	custom_oauth?: boolean;
	max_requests?: number;
	test_stripe_product_id?: string;
	test_stripe_price_id?: string;
	min_annual_price?: number;
	stripe_annual_price_id?: string;
	test_stripe_annual_price_id?: string;
	stripe_overage_price_id?: string;
	test_stripe_overage_price_id?: string;
}

export interface IIssue {
	id?: string;
	created_at: string;
	updated_at?: string;
	title: string;
	status: I'ON_HOLD' | 'NEW' | 'IN_PROGRESS' | 'VALIDATING' | 'COMPLETE' | 'REJECTED';
	url?: string;
	workspace_id: string;
	type: I'BUG' | 'FEATURE_REQUEST' | 'INQUIRY';
	resolution_time?: number;
}

export interface IUser {
	readonly id?: string;
	readonly created_at?: string | Date;
	readonly updated_at?: string | Date;
	name: string;
	readonly email: string;
	workspace_id: string; // The current workspace
	workspace_ids: string[]; // A list of all of the user's workspaces
	environment?: string;
	meta?: unknown;
}

export interface IWebhook {
	readonly id?: string;
	readonly created_at?: string | Date;
	updated_at?: string | Date;
	readonly workspace_id?: string;
	connection_id: string;
	hook_url: string; // The URL of the webhook
	object_type: TObjectType; // The object to return (eg. CRM "contact")
	interval: number; // The interval (in minutes) to check for updated/new objets.  Minimum is 5 minutes.  Interval is based off of 5-minute increments.
	readonly checked_at: string | Date; // The last date/time that a check was done on this object
	readonly integration_type: string;
	readonly environment?: string;
	event: TWebhookEvent;
	readonly runs?: string[]; // An array of the most revent virtual webhook runs
	fields?: string;
	readonly webhook_type?: TIntegrationSupportWebhookType;
	readonly meta?: unknown;
	is_healthy?: boolean;
	page_max_limit?: number;
}

export interface IWebhookData {
	data: unknown[]; // The data array will contact an array of specific objects according to the webhook's connection. (eg. CRM Contacts)
	webhook: IWebhook; // The webhook object
	nonce: string; // random string
	sig: string; // HMAC-SHA1(workspace.secret, data + nonce)
	type: TWebhookDataType;
}

export interface IWorkspace {
	readonly id?: string;
	readonly created_at?: string | Date;
	readonly updated_at?: string | Date;
	name: string;
	readonly admin_ids?: string[]; // Only these users can add additional admins and invite other users
	readonly invited_emails?: string[];
	readonly pay_user_id?: string;
	readonly plan?: string;
	readonly stripe_customer?: string;
	readonly stripe_subscriptions?: string[];
	readonly stripe_prices?: string[];
	readonly secret?: string; // Workspace API secret
	readonly integrations?: IWorkspaceIntegration[]; // Workspace active integrations
	ip_addresses?: string[]; // a list of IP addresses that are allowed to access this workspace
	aws_region?: string;
	aws_key?: string;
	aws_secret?: string;
	datadog_apikey?: string;
	datadog_site?: string;
	environments?: string[]; // a list of authentication environments for the workspace integrations
	add_ons?: string[];
	checklist?: unknown;
	plan_term?: TPlanTerm; // monthly or yearly
	stripe_canceling_at?: string | Date;
	domain?: string; // when set, users of the same domain will auto-join this workspace.  must not be gmail.com or other public domains
}

export interface IWorkspaceIntegration {
	integration_type: string;
	client_id?: string;
	client_secret?: string;
	consumer_key?: string;
	consumer_secret?: string;
	is_active: boolean;
	api_url?: string;
	authorize_url?: string;
	token_url?: string;
	pem?: string; // the PEM X.509 certificate in Base64 ASCII format
	key?: string; // the private KEY X.509 certificate in Base64 ASCII format
	environment?: string; // authentication environment
	categories?: ( TIntegrationCategory )[];
}

export const Plans: IPlan[] = [
    { name: 'Tester', description: 'Test out our unified APIs in your development application.', max_connections: 20, price_per_mille_requests: 0, custom_oauth: false, max_requests: 7500 },
    { name: 'Startup', description: 'Launch 100s of integrations in your production application.', min_price: 250, custom_oauth: true, price_per_mille_requests: 1, max_requests: 250000, stripe_product_id: 'prod_NpKIL9HEvIfdx2', test_stripe_product_id: 'prod_Np1xniikGxq80G', stripe_annual_price_id: 'price_1NiQOiCym65m1EMKfAvlrjq4', min_annual_price: 2500, stripe_price_id: 'price_1NkJPLCym65m1EMKSLqJhKQj', test_stripe_price_id: 'price_1NkISrCym65m1EMKRV9bJsqI', test_stripe_annual_price_id: 'price_1NkFggCym65m1EMKQ88k8pZo', stripe_overage_price_id: 'price_1Ng64NCym65m1EMKHL3m8vq1', test_stripe_overage_price_id: 'price_1NkH5QCym65m1EMKmx9QKFl4' },
    { name: 'Growth', description: 'Your application is growing partially due to our integrations.', min_price: 500, stripe_product_id: 'prod_NpKIvppVcyFEy6', max_requests: 1250000, price_per_mille_requests: 0.4, custom_oauth: true, test_stripe_product_id: 'prod_OXNbPZfryQINTy', min_annual_price: 5000, stripe_annual_price_id: 'price_1NkEWJCym65m1EMKalcplitD', stripe_price_id: 'price_1NkJXtCym65m1EMKFb6zMvGj', test_stripe_price_id: 'price_1NkIq7Cym65m1EMKFAFYEAeT', test_stripe_annual_price_id: 'price_1NkIq8Cym65m1EMKv84PiotO', stripe_overage_price_id: 'price_1NkJYbCym65m1EMKIUQ5g96B', test_stripe_overage_price_id: 'price_1NkIq7Cym65m1EMKh3nXHWaS' },
    { name: 'Scale', description: 'Affordable when you scale and grow your company.', min_price: 1000, max_requests: 4000000, custom_oauth: true, price_per_mille_requests: 0.25, stripe_product_id: 'prod_NpKIcO1Qitzh3t', test_stripe_product_id: 'prod_NpKHMlZb3JXloL', stripe_annual_price_id: 'price_1NiQMgCym65m1EMKYgaEaD0r', min_annual_price: 10000, stripe_price_id: 'price_1NkJdPCym65m1EMKIXLloDTw', test_stripe_price_id: 'price_1NkISrCym65m1EMKRV9bJsqI', test_stripe_annual_price_id: 'price_1NkFggCym65m1EMKQ88k8pZo', stripe_overage_price_id: 'price_1NkJdxCym65m1EMKSVPIH4Vm', test_stripe_overage_price_id: 'price_1NkH5QCym65m1EMKmx9QKFl4' }
];

