{* DO NOT EDIT THIS FILE! Use an override template instead. *}
{if and($attribute|get_class|eq('ezinformationcollectionattribute'), $attribute.content.is_valid)}
    {$attribute.content.year}.{$attribute.content.month}.{$attribute.content.day}
{/if}
