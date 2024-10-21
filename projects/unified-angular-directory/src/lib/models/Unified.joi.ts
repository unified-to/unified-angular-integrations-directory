/*
Unified
==============
*/
import * as Joi from 'joi';

export const joiApiCallType = Joi.string().valid(
	'login',
	'webhook',
	'inbound');

export const joiIntegrationAuthType = Joi.string().valid(
	'oauth1',
	'oauth2',
	'other',
	'token');

export const joiIntegrationCategory = Joi.string().valid(
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
	'commerce',
	'payment',
	'genai',
	'messaging',
	'kms',
	'task',
	'scim');

export const joiIntegrationPermission = Joi.string().valid(
	'auth_login',
	'accounting_account_read',
	'accounting_account_write',
	'accounting_transaction_read',
	'accounting_transaction_write',
	'accounting_journal_read',
	'accounting_journal_write',
	'accounting_invoice_read',
	'accounting_invoice_write',
	'accounting_contact_read',
	'accounting_contact_write',
	'accounting_taxrate_read',
	'accounting_taxrate_write',
	'accounting_organization_read',
	'accounting_order_read',
	'accounting_order_write',
	'payment_payment_read',
	'payment_payment_write',
	'payment_payout_read',
	'payment_refund_read',
	'payment_link_read',
	'payment_link_write',
	'commerce_item_read',
	'commerce_item_write',
	'commerce_collection_read',
	'commerce_collection_write',
	'commerce_inventory_read',
	'commerce_inventory_write',
	'commerce_location_read',
	'commerce_location_write',
	'ats_activity_read',
	'ats_activity_write',
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
	'ats_scorecard_read',
	'ats_scorecard_write',
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
	'hris_payslip_read',
	'hris_payslip_write',
	'hris_timeoff_read',
	'hris_timeoff_write',
	'hris_company_read',
	'hris_company_write',
	'hris_location_read',
	'hris_location_write',
	'uc_call_read',
	'storage_file_read',
	'storage_file_write',
	'webhook',
	'genai_model_read',
	'genai_prompt_read',
	'genai_prompt_write',
	'messaging_message_read',
	'messaging_message_write',
	'messaging_channel_read',
	'kms_space_read',
	'kms_space_write',
	'kms_page_read',
	'kms_page_write',
	'kms_comment_read',
	'kms_comment_write',
	'task_project_read',
	'task_project_write',
	'task_task_read',
	'task_task_write',
	'scim_users_read',
	'scim_users_write',
	'scim_groups_read',
	'scim_groups_write');

export const joiIntegrationSupportWebhookType = Joi.string().valid(
	'virtual',
	'native');

export const joiIssueStatus = Joi.string().valid(
	'COMPLETED',
	'NEW',
	'ROADMAP',
	'IN_PROGRESS',
	'ON_HOLD',
	'VALIDATING',
	'REJECTED',
	'UP_NEXT');

export const joiObjectType = Joi.string().valid(
	'accounting_account',
	'accounting_transaction',
	'accounting_journal',
	'accounting_contact',
	'accounting_invoice',
	'accounting_taxrate',
	'accounting_organization',
	'accounting_order',
	'payment_payment',
	'payment_link',
	'payment_payout',
	'payment_refund',
	'commerce_item',
	'commerce_collection',
	'commerce_inventory',
	'commerce_location',
	'ats_activity',
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
	'hris_payslip',
	'hris_timeoff',
	'hris_company',
	'hris_location',
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
	'storage_file',
	'genai_model',
	'genai_prompt',
	'messaging_message',
	'messaging_channel',
	'kms_space',
	'kms_page',
	'task_project',
	'task_task',
	'scim_users',
	'scim_groups');

export const joiPlanTerm = Joi.string().valid(
	'monthly',
	'yearly');

export const joiSupportInboundType = Joi.string().valid(
	'supported-required',
	'supported',
	'not-supported');

export const joiSupportOutboundType = Joi.string().valid(
	'supported',
	'not-supported');

export const joiWebhookDataType = Joi.string().valid(
	'INITIAL-PARTIAL',
	'INITIAL-COMPLETE',
	'VIRTUAL',
	'NATIVE');

export const joiWebhookEvent = Joi.string().valid(
	'updated',
	'created',
	'deleted');

export const joiWorkspaceEventType = Joi.string().valid(
	'USER_CREATED',
	'USER_DELETED',
	'CONNECTION_HEALTHY',
	'CONNECTION_UNHEALTHY',
	'CONNECTION_CREATED',
	'CONNECTION_UPDATED',
	'CONNECTION_DELETED',
	'CONNECTION_PAUSED',
	'CONNECTION_UNPAUSED',
	'INTEGRATION_ACTIVATED',
	'INTEGRATION_DEACTIVATED',
	'INTEGRATION_UPDATED',
	'WORKSPACE_UPDATED',
	'WORKSPACE_OVER_LIMIT',
	'WORKSPACE_80PERCENT_LIMIT',
	'WEBHOOK_CREATED',
	'WEBHOOK_DELETED',
	'WEBHOOK_UNHEALTHY');

export const joimap_WebhookEvent_IntegrationSupportWebhookType = Joi.object({
	updated: Joi.array().items(joiIntegrationSupportWebhookType).optional(),
	created: Joi.array().items(joiIntegrationSupportWebhookType).optional(),
	deleted: Joi.array().items(joiIntegrationSupportWebhookType).optional(),
}).label('map_WebhookEvent_IntegrationSupportWebhookType');

export const joiApiCall = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional().description('Unique identifier for this API call'),
	created_at: Joi.date().meta( { readonly: true }).optional().description('The date that this object was created'),
	connection_id: Joi.string().optional(),
	workspace_id: Joi.string().meta( { readonly: true }).optional(),
	integration_type: Joi.string().required().allow('').description('The integration type'),
	external_xref: Joi.string().optional().allow(null, '').description('your customer\'s user ID'),
	name: Joi.string().required().allow('').description('The called name of the API method'),
	path: Joi.string().required().allow('').description('The called API method\'s HTTP verb and route path (PUT /crm/{integration}/deak/{id})'),
	size: Joi.number().optional().description('The size of the response'),
	status: Joi.string().required().allow('').description('The resulting HTTP status code (200)'),
	error: Joi.string().optional().allow(null, '').description('The error description (if status code is >= 400)'),
	ip_address: Joi.string().optional().allow(null, ''),
	type: joiApiCallType.required().description('The type of API Call being logged'),
	method: Joi.string().required().allow(''),
	environment: Joi.string().optional().allow(null, '').default('Production'),
	webhook_id: Joi.string().optional(),
	is_billable: Joi.boolean().optional(),
}).label('ApiCall');

export const joiConnectionAuth = Joi.object({
	token: Joi.string().optional().allow(null, ''),
	access_token: Joi.string().optional().allow(null, ''),
	refresh_token: Joi.string().optional().allow(null, ''),
	expiry_date: Joi.date().optional(),
	expires_in: Joi.number().optional(),
	emails: Joi.array().items(Joi.string().email()).optional().allow(null, ''),
	name: Joi.string().optional().allow(null, ''),
	app_id: Joi.string().optional().allow(null, ''),
	client_id: Joi.string().optional().allow(null, ''),
	client_secret: Joi.string().optional().allow(null, ''),
	consumer_key: Joi.string().optional().allow(null, ''),
	consumer_secret: Joi.string().optional().allow(null, ''),
	meta: Joi.object().meta( { readonly: true }).optional(),
	state: Joi.string().optional().allow(null, ''),
	other_auth_info: Joi.array().items(Joi.string()).optional().allow(null, '').description('When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names'),
	api_url: Joi.string().uri().optional().allow(null, ''),
	authorize_url: Joi.string().uri().optional().allow(null, ''),
	token_url: Joi.string().uri().optional().allow(null, ''),
	pem: Joi.string().optional().allow(null, '').description('the PEM X.509 certificate in Base64 ASCII format'),
	key: Joi.string().optional().allow(null, '').description('the private KEY X.509 certificate in Base64 ASCII format'),
	refresh_token_expires_in: Joi.number().optional(),
	refresh_token_expires_date: Joi.date().optional(),
	dev_api_key: Joi.string().optional().allow(null, ''),
}).label('ConnectionAuth').description('An authentication object that represents a specific authorized user\'s connection to an integration.');

export const joiConnection = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional().description('Unique identifier for this integration object'),
	created_at: Joi.date().meta( { readonly: true }).optional().description('The date that this integration object was created'),
	updated_at: Joi.date().meta( { readonly: true }).optional().description('The last date that this integration object was updated'),
	workspace_id: Joi.string().meta( { readonly: true }).optional(),
	integration_type: Joi.string().required().allow('').description('The integration type'),
	external_xref: Joi.string().optional().allow(null, '').description('customer\'s user ID'),
	permissions: Joi.array().items(joiIntegrationPermission).required(),
	categories: Joi.array().items(joiIntegrationCategory).required().description('The Integration categories that this connection supports'),
	auth: joiConnectionAuth.optional(),
	is_paused: Joi.boolean().meta( { readonly: true }).optional().description('Whether this integration has exceed the monthly limit of the plan'),
	auth_aws_arn: Joi.string().optional().allow(null, '').description('the AWS ARN / secretID for the stored auth field'),
	environment: Joi.string().optional().allow(null, '').default('Production'),
	last_healthy_at: Joi.date().meta( { readonly: true }).optional(),
	last_unhealthy_at: Joi.date().meta( { readonly: true }).optional(),
	cursors_cache: Joi.array().items(Joi.object()).meta( { readonly: true }).optional(),
}).label('Connection').description('A connection represents a specific authentication of an integration.');

export const joiIntegrationSupport = Joi.object({
	methods: Joi.object().pattern(/^/, Joi.boolean().optional()).optional(),
	inbound_fields: Joi.object().label('SupportInboundType').optional(),
	outbound_fields: Joi.object().label('SupportOutboundType').optional(),
	webhook_events: joimap_WebhookEvent_IntegrationSupportWebhookType.optional(),
	raw_objects: Joi.array().items(Joi.string()).optional().allow(null, '').description('objects that we map from in the integration'),
	from_webhook: joiSupportInboundType.optional(),
	list_sort_by_name: joiSupportInboundType.optional(),
	list_sort_by_created_at: joiSupportInboundType.optional(),
	list_sort_by_updated_at: joiSupportInboundType.optional(),
	list_updated_gte: joiSupportInboundType.optional(),
	list_user_id: joiSupportInboundType.optional(),
	list_customer_id: joiSupportInboundType.optional(),
	list_company_id: joiSupportInboundType.optional(),
	list_contact_id: joiSupportInboundType.optional(),
	list_application_id: joiSupportInboundType.optional(),
	list_candidate_id: joiSupportInboundType.optional(),
	list_deal_id: joiSupportInboundType.optional(),
	list_job_id: joiSupportInboundType.optional(),
	list_invoice_id: joiSupportInboundType.optional(),
	list_order: joiSupportInboundType.optional(),
	list_query: joiSupportInboundType.optional(),
	list_limit: joiSupportInboundType.optional(),
	list_offset: joiSupportInboundType.optional(),
	search_twitter: joiSupportInboundType.optional(),
	search_name: joiSupportInboundType.optional(),
	search_linkedinurl: joiSupportInboundType.optional(),
	search_email: joiSupportInboundType.optional(),
	search_domain: joiSupportInboundType.optional(),
	list_parent_id: joiSupportInboundType.optional(),
	list_account_id: joiSupportInboundType.optional(),
	list_interview_id: joiSupportInboundType.optional(),
	list_list_id: joiSupportInboundType.optional(),
	list_ticket_id: joiSupportInboundType.optional(),
	list_collection_id: joiSupportInboundType.optional(),
	list_location_id: joiSupportInboundType.optional(),
	list_item_id: joiSupportInboundType.optional(),
	list_type: joiSupportInboundType.optional(),
	list_space_id: joiSupportInboundType.optional(),
	list_channel_id: joiSupportInboundType.optional(),
	list_link_id: joiSupportInboundType.optional(),
	list_project_id: joiSupportInboundType.optional(),
	list_item_variant_id: joiSupportInboundType.optional(),
	list_raw_fields: joiSupportInboundType.optional(),
}).label('IntegrationSupport');

export const joiIntegration = Joi.object({
	type: Joi.string().required().allow('').description('Identifier for this integration'),
	created_at: Joi.string().optional().allow(null, '').description('Date that this integration was supported (YYYY-MM-DD)'),
	updated_at: Joi.string().optional().allow(null, '').description('YYYY-MM-DD'),
	name: Joi.string().required().allow('').description('The integration\'s name'),
	is_active: Joi.boolean().optional().description('Is this integration active in this workspace'),
	categories: Joi.array().items(joiIntegrationCategory).required().description('The categories of support solutions that this integration has'),
	api_docs_url: Joi.string().uri().optional().allow(null, '').description('The URL of the integration\'s API documentation'),
	logo_url: Joi.string().uri().optional().allow(null, '').description('The URL of the integration\'s logo'),
	in_progress: Joi.boolean().optional().description('If this integration is not yet available as it is currently being built by unified.to'),
	color: Joi.string().optional().allow(null, '').description('button background color for AUTH'),
	text_color: Joi.string().optional().allow(null, '').description('text color for AUTH'),
	fa_icon: Joi.string().optional().allow(null, '').description('font-awesome icon'),
	token_names: Joi.array().items(Joi.string()).optional().allow(null, '').description('if auth_types = \'token\''),
	token_instructions: Joi.array().items(Joi.string()).optional().allow(null, '').description('instructions for the user on how to find the token/key'),
	web_url: Joi.string().uri().optional().allow(null, '').description('URL for the software vendor'),
	rate_limit_description: Joi.string().optional().allow(null, ''),
	beta: Joi.boolean().optional().description('This integration is new and is still considered "beta"'),
	support: Joi.object().pattern(/^/, joiIntegrationSupport.optional()).required(),
	tested_at: Joi.date().optional(),
}).label('Integration').description('Informational object for supported integrations.');

export const joiInvoice = Joi.object({
	stripe_id: Joi.string().required().allow(''),
	created_at: Joi.date().required(),
	amount: Joi.number().required(),
	connections: Joi.number().required(),
	plan: Joi.string().required().allow(''),
}).label('Invoice');

export const joiIssue = Joi.object({
	id: Joi.string().optional(),
	created_at: Joi.string().optional().allow(null, ''),
	updated_at: Joi.string().optional().allow(null, ''),
	title: Joi.string().required().allow(''),
	status: joiIssueStatus.required(),
	url: Joi.string().uri().optional().allow(null, ''),
	workspace_id: Joi.string().required(),
	type: Joi.array().items(Joi.string()).optional().allow(null, ''),
	resolution_time: Joi.number().optional(),
	ticket_ref: Joi.string().required().allow(''),
	size: Joi.number().optional().description('1-5, 1 is lowest'),
	importance: Joi.number().optional().description('1-5, 1 is lowest'),
}).label('Issue');

export const joiNotification = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional().description('Unique identifier for this notification object'),
	created_at: Joi.date().meta( { readonly: true }).optional().description('The date that this integration object was created'),
	workspace_id: Joi.string().meta( { readonly: true }).optional(),
	description: Joi.string().optional().allow(null, '').description('Longer description of this notification'),
	user_id: Joi.string().optional(),
	user_name: Joi.string().optional().allow(null, ''),
	workspace_name: Joi.string().optional().allow(null, ''),
	webhook_id: Joi.string().optional(),
	connection_id: Joi.string().optional(),
	integration_type: Joi.string().optional().allow(null, ''),
	integration_name: Joi.string().optional().allow(null, ''),
	sent_at: Joi.date().optional(),
	event: joiWorkspaceEventType.optional(),
}).label('Notification').description('A notification of an event that occurred in you account.');

export const joiPermission = Joi.object({
	can_create_org: Joi.boolean().meta( { readonly: true }).optional(),
	can_leave_org: Joi.boolean().meta( { readonly: true }).optional(),
	can_downgrade: Joi.boolean().meta( { readonly: true }).optional(),
	can_invite: Joi.boolean().meta( { readonly: true }).optional(),
	can_update_org: Joi.boolean().meta( { readonly: true }).optional(),
	can_add_and_remove_admin: Joi.boolean().meta( { readonly: true }).optional(),
	can_accept_invite: Joi.boolean().meta( { readonly: true }).optional(),
	can_reject_invite: Joi.boolean().meta( { readonly: true }).optional(),
	can_pay: Joi.boolean().meta( { readonly: true }).optional(),
	can_get_invoices: Joi.boolean().meta( { readonly: true }).optional(),
	is_admin: Joi.boolean().meta( { readonly: true }).optional(),
}).label('Permission');

export const joiPlan = Joi.object({
	test_stripe_product_id: Joi.string().optional().allow(null, ''),
	test_stripe_price_id: Joi.string().optional().allow(null, ''),
	min_annual_price: Joi.number().optional(),
	stripe_annual_price_id: Joi.string().optional().allow(null, ''),
	test_stripe_annual_price_id: Joi.string().optional().allow(null, ''),
	stripe_overage_price_id: Joi.string().optional().allow(null, ''),
	test_stripe_overage_price_id: Joi.string().optional().allow(null, ''),
	dedicated_channel: Joi.boolean().optional().description('Dedicated Slack/Discord channel'),
}).label('Plan');

export const joiUser = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional(),
	created_at: Joi.date().meta( { readonly: true }).optional(),
	updated_at: Joi.date().meta( { readonly: true }).optional(),
	name: Joi.string().required().allow(''),
	email: Joi.string().email().meta( { readonly: true }).optional().allow(''),
	workspace_id: Joi.string().required().description('The current workspace'),
	workspace_ids: Joi.array().items(Joi.string()).required().description('A list of all of the user\'s workspaces'),
	environment: Joi.string().optional().allow(null, '').default('Production'),
	meta: Joi.object().optional(),
}).label('User').description('The User object represents you on the system. A user can belong to multiple workspaces (ie. organizations).');

export const joiWebhook = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional(),
	created_at: Joi.date().meta( { readonly: true }).optional(),
	updated_at: Joi.date().meta( { readonly: true }).optional(),
	workspace_id: Joi.string().meta( { readonly: true }).optional(),
	connection_id: Joi.string().required(),
	hook_url: Joi.string().uri().required().allow('').description('The URL of the webhook'),
	object_type: joiObjectType.required().description('The object to return (eg. CRM "contact")'),
	interval: Joi.number().optional().description('The interval (in minutes) to check for updated/new objets.  Minimum is 5 minutes.  Interval is based off of 5-minute increments.'),
	checked_at: Joi.date().meta( { readonly: true }).optional().description('The last date/time that a check was done on this object'),
	integration_type: Joi.string().meta( { readonly: true }).optional().allow(''),
	environment: Joi.string().meta( { readonly: true }).optional().allow(null, '').default('Production'),
	event: joiWebhookEvent.required(),
	runs: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, '').description('An array of the most revent virtual webhook runs'),
	fields: Joi.string().optional().allow(null, ''),
	webhook_type: joiIntegrationSupportWebhookType.optional(),
	meta: Joi.object().meta( { readonly: true }).optional(),
	is_healthy: Joi.boolean().meta( { readonly: true }).optional(),
	page_max_limit: Joi.number().optional(),
	filters: Joi.object().pattern(/^/, Joi.string().optional()).optional().allow(null, ''),
}).label('Webhook').description('A webhook is used to POST new/updated information to your server.');

export const joiWebhookData = Joi.object({
	data: Joi.array().items(Joi.object()).required().description('The data array will contact an array of specific objects according to the webhook\'s connection. (eg. CRM Contacts)'),
	webhook: joiWebhook.required().description('The webhook object'),
	nonce: Joi.string().required().allow('').description('random string'),
	sig: Joi.string().required().allow('').description('HMAC-SHA1(workspace.secret, data + nonce)'),
	type: joiWebhookDataType.required(),
}).label('WebhookData');

export const joiWorkspaceIntegration = Joi.object({
	integration_type: Joi.string().required().allow(''),
	client_id: Joi.string().optional().allow(null, ''),
	client_secret: Joi.string().optional().allow(null, ''),
	consumer_key: Joi.string().optional().allow(null, ''),
	consumer_secret: Joi.string().optional().allow(null, ''),
	is_active: Joi.boolean().required(),
	api_url: Joi.string().optional().allow(null, ''),
	authorize_url: Joi.string().optional().allow(null, ''),
	token_url: Joi.string().optional().allow(null, ''),
	base_url: Joi.string().optional().allow(null, ''),
	pem: Joi.string().optional().allow(null, '').description('the PEM X.509 certificate in Base64 ASCII format'),
	key: Joi.string().optional().allow(null, '').description('the private KEY X.509 certificate in Base64 ASCII format'),
	environment: Joi.string().optional().allow(null, '').description('authentication environment').default('Production'),
	categories: Joi.array().items(joiIntegrationCategory).optional(),
	dev_api_key: Joi.string().optional().allow(null, ''),
}).label('WorkspaceIntegration');

export const joiWorkspace = Joi.object({
	id: Joi.string().meta( { readonly: true }).optional(),
	created_at: Joi.date().meta( { readonly: true }).optional(),
	updated_at: Joi.date().meta( { readonly: true }).optional(),
	name: Joi.string().required().allow(''),
	admin_ids: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().description('Only these users can add additional admins and invite other users'),
	invited_emails: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, ''),
	pay_user_id: Joi.string().meta( { readonly: true }).optional().allow(null, ''),
	plan: Joi.string().meta( { readonly: true }).optional().allow(null, ''),
	stripe_customer: Joi.string().meta( { readonly: true }).optional().allow(null, ''),
	stripe_subscriptions: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, ''),
	stripe_prices: Joi.array().items(Joi.string()).meta( { readonly: true }).optional().allow(null, ''),
	secret: Joi.string().meta( { readonly: true }).optional().allow(null, '').description('Workspace API secret'),
	integrations: Joi.array().items(joiWorkspaceIntegration).meta( { readonly: true }).optional().description('Workspace active integrations'),
	ip_addresses: Joi.array().items(Joi.string()).optional().allow(null, '').description('a list of IP addresses that are allowed to access this workspace'),
	aws_region: Joi.string().optional().allow(null, ''),
	aws_key: Joi.string().optional().allow(null, ''),
	aws_secret: Joi.string().optional().allow(null, ''),
	datadog_apikey: Joi.string().optional().allow(null, ''),
	datadog_site: Joi.string().optional().allow(null, ''),
	environments: Joi.array().items(Joi.string()).optional().allow(null, '').description('a list of authentication environments for the workspace integrations'),
	add_ons: Joi.array().items(Joi.string()).optional().allow(null, ''),
	checklist: Joi.object().optional(),
	plan_term: joiPlanTerm.optional().description('monthly or yearly').default('monthly'),
	stripe_canceling_at: Joi.date().optional(),
	domain: Joi.string().optional().allow(null, '').description('when set, users of the same domain will auto-join this workspace.  must not be gmail.com or other public domains'),
	event_webhook_url: Joi.string().uri().optional().allow(null, ''),
	event_webhook_events: Joi.array().items(joiWorkspaceEventType).optional(),
	custom_auth_domain: Joi.string().optional().allow(null, ''),
	custom_auth_domain_valid: Joi.boolean().optional(),
	custom_api_domain: Joi.string().optional().allow(null, ''),
}).label('Workspace').description('The User\'s workspace object. A workspace is like an organization that one or more users belong to.');

