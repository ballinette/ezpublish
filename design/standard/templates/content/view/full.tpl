<form method="post" action="/content/action/">

<h2>View {$class.name}</h2>
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
	<td>
{*	{$object.name|texttoimage("hatten",45,0,,,-1,-3)}*}
 	<h1>{$object.name}</h1>
	</td>
</tr>
</table>

{switch match=$object.can_edit}
{case match=1}
         <input type="hidden" name="ContentObjectID" value="{$object.id}" />
         <input type="submit" name="EditButton" value="Edit" />
{/case}
{case match=0}
  You are not allowed to edit this object
{/case}
{/switch}

Current version: {$object.current_version}

<br /><b>Path:</b><br />
{include uri="design:content/path.tpl" items=$parents base_uri=$module.functions.view.uri} 
 {$object.name}
<br/>

<table width="100%">
<tr>
    <td width="80%" valign="top">
    <table width="100%">
    {section name=ContentObjectAttribute loop=$object.contentobject_attributes}
    <tr>
	<td>
	<b>
	{$ContentObjectAttribute:item.contentclass_attribute.name}
	</b><br />
	{attribute_view_gui attribute=$ContentObjectAttribute:item}
	</td>
    </tr>
    {/section}
    </table>
    </td>
    <td width="20%" valign="top">
    <h2>Related objects</h2>
    <table width="100%" cellspacing="0">
    {section name=Object loop=$related_contentobject_array show=$related_contentobject_array sequence=array(bglight,bgdark)}
    <tr>
	<td class="{$Object:sequence}">
	{content_view_gui view=line content_object=$Object:item}
	</td>
    </tr>
    {section-else}
    <tr>
	<td class="{$Object:sequence}">
	None
	</td>
    </tr>
    {/section}
   </table>
   </td>
</tr>
</table>

<h1>Children</h1>
<table width="100%">
{section name=Children loop=$children sequence=array(bglight,bgdark)}
<tr>
	<td class="{$Children:sequence}" >

	<a href="{$module.functions.view.uri}/full/{$Children:item.node_id}">
	{content_view_gui view=line content_object=$Children:item.contentobject} 
	</a>

	<a href="{$module.functions.edit.uri}/{$Children:item.contentobject_id}">[ edit ]</a>
        - {$Children:item.contentobject.class_name}
	</td>
</tr>
{/section}
</table>

{switch match=$object.can_create}
{case match=1}
         <input type="hidden" name="NodeID" value="{$nodeID}" />
         <input type="submit" name="NewButton" value="New" />
         <select name="ClassID">
	      {section name=Classes loop=$classes}
	      <option value="{$Classes:item.id}">{$Classes:item.name}</option>
	      {/section}
         </select>
{/case}
{case match=0}
  You are not allowed to create child objects
{/case}
{/switch}

<table width="100%">
<tr>
	<td>
	{switch match=$previous|lt(0) }
	  {case match=0}
          <a href="{$module.functions.view.uri}/full/{$nodeID}/offset/{$previous}"> << Previous </a>
	  {/case}
          {case match=1}
	  Previous
	  {/case}
        {/switch}

	</td>
	<td align="right">
	{switch match=$next|lt($children_count) }
	  {case match=1}
          <a href="{$module.functions.view.uri}/full/{$nodeID}/offset/{$next}"> Next >> </a>
          {/case}
	  {case}
	  Next
          {/case}
        {/switch}

	</td>
</tr>
</table>

<input type="hidden" name="ContentObjectID" value="{$object.id}" />

</form>